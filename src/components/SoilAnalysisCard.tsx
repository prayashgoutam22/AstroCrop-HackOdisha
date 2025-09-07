import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Beaker, Droplet, Sprout, Thermometer, BarChart3, Download, Calendar, AlertTriangle, Info, MapPin, Clock, FileText } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface SoilProperty {
  name: string;
  value: number | string;
  unit?: string;
  status: "optimal" | "low" | "high" | "critical";
  recommendation?: string;
  description?: string;
  idealRange?: string;
}

interface SoilAnalysis {
  lastUpdated: string;
  nextSamplingDate: string;
  location: string;
  fieldName: string;
  sampleDepth: string;
  samplingMethod: string;
  labName: string;
  properties: {
    nutrients: SoilProperty[];
    physical: SoilProperty[];
    biological: SoilProperty[];
  };
  recommendations: string[];
  historicalData?: {
    date: string;
    key: string;
    value: number | string;
  }[];
}

export function SoilAnalysisCard() {
  const { t } = useLanguage();
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [activeTab, setActiveTab] = useState("nutrients");
  const cardRef = useRef<HTMLDivElement>(null);

  // Mock soil analysis data - in a real app, this would come from API
  const soilData: SoilAnalysis = {
    lastUpdated: "May 10, 2023",
    nextSamplingDate: "November 10, 2023",
    location: "North Field, Block A",
    fieldName: "Wheat Field 3",
    sampleDepth: "0-20 cm",
    samplingMethod: "Grid sampling (10 points)",
    labName: "AgriLab Analytics",
    properties: {
      nutrients: [
        { 
          name: "Nitrogen (N)", 
          value: 45, 
          unit: "ppm", 
          status: "low", 
          recommendation: "Apply nitrogen-rich fertilizer",
          description: "Essential for leaf and stem growth",
          idealRange: "50-100 ppm"
        },
        { 
          name: "Phosphorus (P)", 
          value: 35, 
          unit: "ppm", 
          status: "optimal",
          description: "Critical for root development and flowering",
          idealRange: "30-50 ppm"
        },
        { 
          name: "Potassium (K)", 
          value: 180, 
          unit: "ppm", 
          status: "optimal",
          description: "Improves overall plant health and disease resistance",
          idealRange: "150-250 ppm"
        },
        { 
          name: "Calcium (Ca)", 
          value: 1200, 
          unit: "ppm", 
          status: "high", 
          recommendation: "Avoid calcium-rich amendments",
          description: "Strengthens cell walls and improves soil structure",
          idealRange: "800-1000 ppm"
        },
        { 
          name: "Magnesium (Mg)", 
          value: 150, 
          unit: "ppm", 
          status: "optimal",
          description: "Central component of chlorophyll for photosynthesis",
          idealRange: "120-180 ppm"
        },
        { 
          name: "Sulfur (S)", 
          value: 12, 
          unit: "ppm", 
          status: "low", 
          recommendation: "Consider sulfur application",
          description: "Important for protein synthesis and enzyme activity",
          idealRange: "15-25 ppm"
        },
        { 
          name: "Zinc (Zn)", 
          value: 2.1, 
          unit: "ppm", 
          status: "optimal",
          description: "Essential micronutrient for enzyme systems",
          idealRange: "1.5-3.0 ppm"
        },
        { 
          name: "Boron (B)", 
          value: 0.4, 
          unit: "ppm", 
          status: "low", 
          recommendation: "Apply boron supplement",
          description: "Important for cell division and plant reproduction",
          idealRange: "0.5-1.0 ppm"
        },
      ],
      physical: [
        { 
          name: "pH", 
          value: 6.8, 
          status: "optimal",
          description: "Measure of soil acidity/alkalinity",
          idealRange: "6.5-7.0"
        },
        { 
          name: "Organic Matter", 
          value: "2.4%", 
          status: "low", 
          recommendation: "Add compost or organic mulch",
          description: "Improves soil structure, water retention, and nutrient cycling",
          idealRange: "3-5%"
        },
        { 
          name: "Cation Exchange", 
          value: 14, 
          unit: "meq/100g", 
          status: "optimal",
          description: "Soil's ability to hold and exchange nutrients",
          idealRange: "12-18 meq/100g"
        },
        { 
          name: "Soil Texture", 
          value: "Loam", 
          status: "optimal",
          description: "Balance of sand, silt, and clay particles"
        },
        { 
          name: "Water Holding Capacity", 
          value: "Medium", 
          status: "optimal",
          description: "Ability to retain moisture for plant use"
        },
        { 
          name: "Bulk Density", 
          value: 1.3, 
          unit: "g/cm³", 
          status: "optimal",
          description: "Measure of soil compaction",
          idealRange: "1.0-1.4 g/cm³"
        },
      ],
      biological: [
        { 
          name: "Microbial Activity", 
          value: "Moderate", 
          status: "low", 
          recommendation: "Apply microbial inoculants",
          description: "Beneficial microorganisms that support plant health"
        },
        { 
          name: "Earthworm Count", 
          value: 8, 
          unit: "per sq ft", 
          status: "optimal",
          description: "Indicator of soil health and organic matter processing",
          idealRange: "5-10 per sq ft"
        },
        { 
          name: "Respiration Rate", 
          value: 35, 
          unit: "mg CO₂/kg/day", 
          status: "optimal",
          description: "Measure of biological activity in soil",
          idealRange: "30-50 mg CO₂/kg/day"
        },
        { 
          name: "Fungi:Bacteria Ratio", 
          value: "0.8:1", 
          status: "low", 
          recommendation: "Add fungal-dominant compost",
          description: "Balance of fungal and bacterial communities",
          idealRange: "1:1 - 1.5:1"
        },
      ],
    },
    recommendations: [
      "Apply 120 kg/ha of nitrogen fertilizer split into three applications (pre-planting, early growth, and pre-flowering)",
      "Incorporate 5 tons/ha of well-composted organic matter to improve soil structure and water retention",
      "Add microbial inoculants containing mycorrhizal fungi to enhance nutrient cycling and root development",
      "Apply 15 kg/ha of boron supplement with your next fertilizer application",
      "Consider cover cropping with legumes during off-season to build soil health and fix nitrogen",
      "Implement minimum tillage practices to preserve soil structure and biological activity",
    ],
    historicalData: [
      { date: "May 2022", key: "Nitrogen", value: 38 },
      { date: "Nov 2021", key: "Nitrogen", value: 42 },
      { date: "May 2022", key: "Phosphorus", value: 32 },
      { date: "Nov 2021", key: "Phosphorus", value: 28 },
      { date: "May 2022", key: "Organic Matter", value: "2.1%" },
      { date: "Nov 2021", key: "Organic Matter", value: "2.0%" },
    ],
  };

  const getStatusColor = (status: SoilProperty["status"]) => {
    switch (status) {
      case "optimal": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "low": return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "high": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "critical": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusIcon = (status: SoilProperty["status"]) => {
    switch (status) {
      case "optimal": return null;
      case "low": 
      case "high":
      case "critical": return <AlertTriangle className="h-3 w-3" />;
      default: return null;
    }
  };

  const getProgressValue = (property: SoilProperty) => {
    // This is a simplified example - in a real app, you'd have proper ranges for each nutrient
    switch (property.status) {
      case "low": return 30;
      case "optimal": return 70;
      case "high": return 90;
      case "critical": return 100;
      default: return 50;
    }
  };

  const getProgressColor = (status: SoilProperty["status"]) => {
    switch (status) {
      case "optimal": return "bg-green-600";
      case "low": return "bg-amber-600";
      case "high": return "bg-blue-600";
      case "critical": return "bg-red-600";
      default: return "";
    }
  };

  // Function to generate and download PDF
  const generatePDF = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsGeneratingPdf(true);
      
      const canvas = await html2canvas(cardRef.current);
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('soil-analysis-report.pdf');
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <Card className="shadow-card" ref={cardRef}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Beaker className="h-5 w-5 text-primary" />
            {t('soilAnalysis')}
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="flex items-center gap-1 text-xs cursor-help">
                    <Calendar className="h-3 w-3" />
                    {t('lastUpdated')}: {soilData.lastUpdated}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Analysis performed by {soilData.labName}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={generatePDF}
              disabled={isGeneratingPdf}
            >
              {isGeneratingPdf ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              ) : (
                <Download className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-2 text-xs">
          <Badge variant="secondary" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {soilData.location}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <FileText className="h-3 w-3" />
            {t('sampleDepth')}: {soilData.sampleDepth}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {t('nextSampling')}: {soilData.nextSamplingDate}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent id="soil-analysis-content">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="nutrients" className="text-xs">
              <Sprout className="h-3.5 w-3.5 mr-1" />
              {t('nutrients')}
            </TabsTrigger>
            <TabsTrigger value="physical" className="text-xs">
              <Thermometer className="h-3.5 w-3.5 mr-1" />
              {t('physical')}
            </TabsTrigger>
            <TabsTrigger value="biological" className="text-xs">
              <Droplet className="h-3.5 w-3.5 mr-1" />
              {t('biological')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nutrients" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {soilData.properties.nutrients.map((nutrient, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium">{nutrient.name}</span>
                      {getStatusIcon(nutrient.status) && (
                        <span className="text-warning">
                          {getStatusIcon(nutrient.status)}
                        </span>
                      )}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3 w-3 text-muted-foreground cursor-help ml-1" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[200px]">
                            <p className="text-xs">{nutrient.description}</p>
                            {nutrient.idealRange && (
                              <p className="text-xs mt-1">Ideal range: {nutrient.idealRange}</p>
                            )}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold">
                        {nutrient.value} {nutrient.unit}
                      </span>
                      <Badge 
                        className={`text-[10px] px-1.5 py-0 ${getStatusColor(nutrient.status)}`}
                        variant="outline"
                      >
                        {nutrient.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={getProgressValue(nutrient)} 
                    className={`h-1.5 ${getProgressColor(nutrient.status)}`} 
                  />
                  {nutrient.recommendation && (
                    <p className="text-[10px] text-muted-foreground italic">{nutrient.recommendation}</p>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="physical" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {soilData.properties.physical.map((property, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium">{property.name}</span>
                      {getStatusIcon(property.status) && (
                        <span className="text-warning">
                          {getStatusIcon(property.status)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold">
                        {property.value} {property.unit}
                      </span>
                      <Badge 
                        className={`text-[10px] px-1.5 py-0 ${getStatusColor(property.status)}`}
                        variant="outline"
                      >
                        {property.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={getProgressValue(property)} 
                    className={`h-1.5 ${getProgressColor(property.status)}`} 
                  />
                  {property.recommendation && (
                    <p className="text-[10px] text-muted-foreground italic">{property.recommendation}</p>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="biological" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {soilData.properties.biological.map((property, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium">{property.name}</span>
                      {getStatusIcon(property.status) && (
                        <span className="text-warning">
                          {getStatusIcon(property.status)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold">
                        {property.value} {property.unit}
                      </span>
                      <Badge 
                        className={`text-[10px] px-1.5 py-0 ${getStatusColor(property.status)}`}
                        variant="outline"
                      >
                        {property.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={getProgressValue(property)} 
                    className={`h-1.5 ${getProgressColor(property.status)}`} 
                  />
                  {property.recommendation && (
                    <p className="text-[10px] text-muted-foreground italic">{property.recommendation}</p>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4 text-primary" />
            <h4 className="text-sm font-medium">{t('recommendations')}</h4>
          </div>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {soilData.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="text-primary">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {activeTab === "nutrients" && soilData.historicalData && soilData.historicalData.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-medium">{t('historicalData')}</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {soilData.historicalData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-1.5 bg-muted/30 rounded">
                  <span className="font-medium">{item.key} ({item.date})</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-muted">
          <p>{t('samplingMethod')}: <span className="font-medium">{soilData.samplingMethod}</span></p>
          <p className="mt-1">Next soil sampling recommended by: <span className="font-medium">{soilData.nextSamplingDate}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}