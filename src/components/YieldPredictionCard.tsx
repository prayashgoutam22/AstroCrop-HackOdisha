import { useState } from "react"
import { TrendingUp, Leaf, Calculator, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "./LanguageProvider"
import { useLocation } from "./LocationProvider"

const crops = [
  "Rice", "Wheat", "Maize", "Cotton", "Sugarcane", "Soybean", 
  "Groundnut", "Sunflower", "Mustard", "Barley", "Jowar", "Bajra"
]

interface YieldData {
  expectedYield: number
  totalYield: number
  area: number
  confidence: number
  recommendation: string
  impossibleConditions?: boolean
}

export function YieldPredictionCard() {
  const { t } = useLanguage()
  const { location } = useLocation()
  const [formData, setFormData] = useState({
    cropType: "",
    soilPH: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    area: "1", // Default to 1 hectare
  })
  
  const [validationErrors, setValidationErrors] = useState({
    soilPH: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    area: ""
  })
  const [yieldData, setYieldData] = useState<YieldData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getLocationDisplay = () => {
    if (location) {
      if (location.city && location.state) {
        return `${location.city}, ${location.state}`
      } else if (location.latitude && location.longitude) {
        return `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`
      }
    }
    return "Location not set"
  }

  // Validate input as user types
  const validateInput = (name: string, value: string) => {
    let error = ""
    
    if (value === "") return error
    
    const numValue = parseFloat(value)
    
    switch (name) {
      case "soilPH":
        if (numValue < 0 || numValue > 14) {
          error = "pH must be between 0-14"
        } else if (numValue < 3 || numValue > 10) {
          error = "Warning: Extreme pH value for crop growth"
        }
        break
      case "nitrogen":
      case "phosphorus":
      case "potassium":
        if (numValue < 0) {
          error = "Value must be positive"
        }
        break
      case "area":
        if (numValue <= 0) {
          error = "Area must be greater than 0"
        }
        break
    }
    
    setValidationErrors(prev => ({ ...prev, [name]: error }))
    return error
  }
  
  // Handle input change with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    validateInput(name, value)
  }
  
  const handlePredict = async () => {
    if (!formData.cropType || !formData.soilPH || !formData.area) return
    
    // Validate inputs
    const soilPH = parseFloat(formData.soilPH)
    const nitrogen = parseFloat(formData.nitrogen) || 0
    const phosphorus = parseFloat(formData.phosphorus) || 0
    const potassium = parseFloat(formData.potassium) || 0
    const area = parseFloat(formData.area) || 1
    
    // Check for valid ranges and collect all errors
    let hasErrors = false
    let newErrors = {
      soilPH: "",
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      area: ""
    }
    
    if (soilPH < 0 || soilPH > 14) {
      newErrors.soilPH = "pH must be between 0-14"
      hasErrors = true
    } else if (soilPH < 3 || soilPH > 10) {
      newErrors.soilPH = "Warning: Extreme pH value for crop growth"
    }
    
    if (nitrogen < 0) {
      newErrors.nitrogen = "Value must be positive"
      hasErrors = true
    }
    
    if (phosphorus < 0) {
      newErrors.phosphorus = "Value must be positive"
      hasErrors = true
    }
    
    if (potassium < 0) {
      newErrors.potassium = "Value must be positive"
      hasErrors = true
    }
    
    if (area <= 0) {
      newErrors.area = "Area must be greater than 0"
      hasErrors = true
    }
    
    setValidationErrors(newErrors)
    
    if (hasErrors) {
      return
    }
    
    setIsLoading(true)
    
    // Simulate ML prediction with realistic algorithm
    setTimeout(() => {
      // Base yields for different crops (kg/hectare)
      const cropBaseYields = {
        "Rice": 3500,
        "Wheat": 3000,
        "Maize": 4500,
        "Cotton": 2000,
        "Sugarcane": 70000,
        "Soybean": 2500,
        "Groundnut": 1800,
        "Sunflower": 1500,
        "Mustard": 1200,
        "Barley": 2800,
        "Jowar": 2000,
        "Bajra": 1800
      }
      
      // Optimal pH ranges for different crops
      const cropOptimalPH = {
        "Rice": { min: 5.5, max: 6.5, optimal: 6.0 },
        "Wheat": { min: 6.0, max: 7.5, optimal: 6.5 },
        "Maize": { min: 5.8, max: 7.0, optimal: 6.5 },
        "Cotton": { min: 5.5, max: 8.5, optimal: 7.0 },
        "Sugarcane": { min: 6.0, max: 7.5, optimal: 6.5 },
        "Soybean": { min: 6.0, max: 7.0, optimal: 6.5 },
        "Groundnut": { min: 5.5, max: 7.0, optimal: 6.0 },
        "Sunflower": { min: 6.0, max: 7.5, optimal: 6.5 },
        "Mustard": { min: 5.5, max: 7.5, optimal: 6.5 },
        "Barley": { min: 6.0, max: 7.5, optimal: 7.0 },
        "Jowar": { min: 5.5, max: 7.5, optimal: 6.5 },
        "Bajra": { min: 5.5, max: 8.0, optimal: 6.5 }
      }
      
      // Optimal NPK values for different crops (in ppm)
      const cropOptimalNPK = {
        "Rice": { N: 80, P: 40, K: 40 },
        "Wheat": { N: 120, P: 60, K: 40 },
        "Maize": { N: 150, P: 60, K: 80 },
        "Cotton": { N: 100, P: 50, K: 50 },
        "Sugarcane": { N: 150, P: 60, K: 60 },
        "Soybean": { N: 20, P: 60, K: 40 },
        "Groundnut": { N: 20, P: 40, K: 50 },
        "Sunflower": { N: 80, P: 50, K: 40 },
        "Mustard": { N: 80, P: 40, K: 40 },
        "Barley": { N: 80, P: 40, K: 30 },
        "Jowar": { N: 80, P: 40, K: 40 },
        "Bajra": { N: 60, P: 30, K: 30 }
      }
      
      const baseYield = cropBaseYields[formData.cropType] || 3000
      const optimalPH = cropOptimalPH[formData.cropType] || { min: 6.0, max: 7.0, optimal: 6.5 }
      const optimalNPK = cropOptimalNPK[formData.cropType] || { N: 100, P: 50, K: 50 }
      
      // Check for impossible growing conditions
      let impossibleConditions = false
      
      // Calculate pH impact (0 to 1.0)
      let phFactor = 1.0
      
      // pH below 3.0 or above 10.0 makes crop growth impossible for most crops
      if (soilPH < 3.0 || soilPH > 10.0) {
        phFactor = 0
        impossibleConditions = true
      } else if (soilPH < optimalPH.min) {
        // Exponential decline in yield as pH moves away from minimum
        const distance = optimalPH.min - soilPH
        phFactor = Math.max(0, Math.exp(-0.5 * distance) - 0.1)
      } else if (soilPH > optimalPH.max) {
        // Exponential decline in yield as pH moves away from maximum
        const distance = soilPH - optimalPH.max
        phFactor = Math.max(0, Math.exp(-0.5 * distance) - 0.1)
      } else {
        // Within optimal range - small adjustments based on distance from optimal
        phFactor = 1.0 - Math.abs(soilPH - optimalPH.optimal) * 0.05
      }
      
      // Calculate NPK impact (0.5 to 1.2)
      const nFactor = nitrogen <= 0 ? 0.5 : Math.min(1.2, Math.max(0.5, 0.7 + (nitrogen / optimalNPK.N) * 0.3))
      const pFactor = phosphorus <= 0 ? 0.5 : Math.min(1.2, Math.max(0.5, 0.7 + (phosphorus / optimalNPK.P) * 0.3))
      const kFactor = potassium <= 0 ? 0.5 : Math.min(1.2, Math.max(0.5, 0.7 + (potassium / optimalNPK.K) * 0.3))
      
      // Calculate final yield per hectare
      const yieldPerHectare = Math.round(baseYield * phFactor * nFactor * pFactor * kFactor)
      
      // Calculate total yield based on area
      const totalYield = Math.round(yieldPerHectare * area)
      
      // Calculate confidence based on how close inputs are to optimal
      const phConfidence = 100 - (Math.abs(soilPH - optimalPH.optimal) / 7) * 50
      const nConfidence = nitrogen <= 0 ? 50 : Math.min(100, (nitrogen / optimalNPK.N) * 100)
      const pConfidence = phosphorus <= 0 ? 50 : Math.min(100, (phosphorus / optimalNPK.P) * 100)
      const kConfidence = potassium <= 0 ? 50 : Math.min(100, (potassium / optimalNPK.K) * 100)
      
      const confidence = Math.round((phConfidence + nConfidence + pConfidence + kConfidence) / 4)
      
      // Generate recommendations
      let recommendation = "Optimal conditions for good yield."
      const recommendations = []
      
      if (soilPH < optimalPH.min) {
        recommendations.push(`Consider liming to increase soil pH from ${soilPH} to the optimal range (${optimalPH.min}-${optimalPH.max}).`)
      } else if (soilPH > optimalPH.max) {
        recommendations.push(`Consider adding organic matter to lower pH from ${soilPH} to the optimal range (${optimalPH.min}-${optimalPH.max}).`)
      }
      
      if (nitrogen < optimalNPK.N * 0.7) {
        recommendations.push(`Increase nitrogen application to reach optimal level (${optimalNPK.N} ppm).`)
      }
      
      if (phosphorus < optimalNPK.P * 0.7) {
        recommendations.push(`Increase phosphorus application to reach optimal level (${optimalNPK.P} ppm).`)
      }
      
      if (potassium < optimalNPK.K * 0.7) {
        recommendations.push(`Increase potassium application to reach optimal level (${optimalNPK.K} ppm).`)
      }
      
      if (recommendations.length > 0) {
        recommendation = recommendations.join(' ')
      }
      
      // If conditions are impossible, set yield to 0
      if (impossibleConditions) {
        setYieldData({
          expectedYield: 0,
          totalYield: 0,
          area: area,
          confidence: 0,
          recommendation: "Crop cannot grow under these extreme conditions. Consider adjusting your inputs to realistic values.",
          impossibleConditions: true
        })
      } else {
        setYieldData({
          expectedYield: yieldPerHectare,
          totalYield: totalYield,
          area: area,
          confidence: Math.min(95, Math.max(60, confidence)),
          recommendation,
          impossibleConditions: false
        })
      }
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            {t('yieldPrediction')}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="truncate max-w-[150px]" title={getLocationDisplay()}>
              {getLocationDisplay()}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="crop">{t('cropType')}</Label>
            <Select value={formData.cropType} onValueChange={(value) => setFormData({...formData, cropType: value})}>
              <SelectTrigger>
                <SelectValue placeholder={t('selectCrop')} />
              </SelectTrigger>
              <SelectContent>
                {crops.map((crop) => (
                  <SelectItem key={crop} value={crop}>
                    {crop}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ph">{t('soilPH')}</Label>
            <Input
              id="ph"
              name="soilPH"
              type="number"
              placeholder="6.5"
              step="0.1"
              min="0"
              max="14"
              value={formData.soilPH}
              onChange={handleInputChange}
              className={validationErrors.soilPH ? "border-red-500" : ""}
            />
            {validationErrors.soilPH && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.soilPH}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="nitrogen">{t('nitrogen')} ({t('ppm')})</Label>
            <Input
              id="nitrogen"
              name="nitrogen"
              type="number"
              placeholder="50"
              value={formData.nitrogen}
              onChange={handleInputChange}
              className={validationErrors.nitrogen ? "border-red-500" : ""}
            />
            {validationErrors.nitrogen && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.nitrogen}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phosphorus">{t('phosphorus')} ({t('ppm')})</Label>
            <Input
              id="phosphorus"
              name="phosphorus"
              type="number"
              placeholder="25"
              value={formData.phosphorus}
              onChange={handleInputChange}
              className={validationErrors.phosphorus ? "border-red-500" : ""}
            />
            {validationErrors.phosphorus && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.phosphorus}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="potassium">{t('potassium')} ({t('ppm')})</Label>
            <Input
              id="potassium"
              name="potassium"
              type="number"
              placeholder="25"
              value={formData.potassium}
              onChange={handleInputChange}
              className={validationErrors.potassium ? "border-red-500" : ""}
            />
            {validationErrors.potassium && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.potassium}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="area">{t('area')} ({t('hectare')})</Label>
            <Input
              id="area"
              name="area"
              type="number"
              placeholder="1"
              min="0.1"
              step="0.1"
              value={formData.area}
              onChange={handleInputChange}
              className={validationErrors.area ? "border-red-500" : ""}
            />
            {validationErrors.area && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.area}</p>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handlePredict} 
          disabled={!formData.cropType || !formData.soilPH || !formData.area || isLoading}
          className="w-full bg-gradient-primary hover:opacity-90"
        >
          <Calculator className="h-4 w-4 mr-2" />
          {isLoading ? t('analyzing') : t('predict')}
        </Button>
        
        {yieldData && (
          <div className={`mt-6 p-4 rounded-lg ${yieldData.impossibleConditions ? "bg-red-50 border border-red-200" : "bg-gradient-field/10 border border-primary/20"}`}>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="h-5 w-5 text-primary" />
              <h4 className="font-semibold">{t('predictedYield')}</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted-foreground">{t('predictedYield')}</span>
                  <span className="font-bold text-primary">
                    {yieldData.expectedYield} {t('kgPerHectare')}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted-foreground">{t('totalYield')} ({yieldData.area} {t('hectare')})</span>
                  <span className="font-bold text-green-600">
                    {yieldData.totalYield} kg
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted-foreground">{t('confidence')}</span>
                  <span className="font-medium">{yieldData.confidence}%</span>
                </div>
                <Progress value={yieldData.confidence} className="h-2" />
              </div>
              
              <div className="mt-3 p-3 rounded bg-muted/50">
                <p className="text-sm">
                  <strong>{t('recommendation')}:</strong> {yieldData.recommendation}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}