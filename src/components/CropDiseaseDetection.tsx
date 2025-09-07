import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Camera, Upload, AlertCircle, Leaf, Search, Info, Microscope, Pill, Droplets, Shield, Calendar } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface Disease {
  name: string;
  scientificName?: string;
  probability: number;
  symptoms: string[];
  treatment: string;
  preventionTips: string[];
  firstDetected?: string;
  affectedCrops?: string[];
  severity?: string;
  spreadRate?: string;
  environmentalConditions?: string[];
}

export function CropDiseaseDetection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("upload");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [results, setResults] = useState<Disease[] | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<number>(0);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock disease detection function - in a real app, this would call an AI model API
  const detectDisease = () => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock results
      const mockResults: Disease[] = [
        {
          name: "Late Blight",
          scientificName: "Phytophthora infestans",
          probability: 0.87,
          symptoms: [
            "Dark brown spots on leaves",
            "White fungal growth on undersides",
            "Rapid wilting of foliage"
          ],
          treatment: "Apply copper-based fungicide immediately. Remove and destroy infected plants to prevent spread.",
          preventionTips: [
            "Use resistant varieties",
            "Ensure proper plant spacing for airflow",
            "Apply preventative fungicides during wet periods"
          ],
          firstDetected: "June 15, 2023",
          affectedCrops: ["Potato", "Tomato", "Eggplant"],
          severity: "high",
          spreadRate: "Rapid",
          environmentalConditions: [
            "High humidity (>90%)",
            "Moderate temperatures (60-80°F)",
            "Wet foliage for extended periods"
          ]
        },
        {
          name: "Early Blight",
          scientificName: "Alternaria solani",
          probability: 0.12,
          symptoms: [
            "Concentric rings on lower leaves",
            "Yellow areas surrounding spots",
            "Gradual leaf death"
          ],
          treatment: "Apply approved fungicide. Prune affected leaves and improve air circulation.",
          preventionTips: [
            "Rotate crops annually",
            "Mulch around plants",
            "Water at base of plants, not leaves"
          ],
          firstDetected: "June 15, 2023",
          affectedCrops: ["Tomato", "Potato", "Pepper"],
          severity: "moderate",
          spreadRate: "Moderate",
          environmentalConditions: [
            "Warm temperatures (75-85°F)",
            "Humid conditions",
            "Periods of leaf wetness"
          ]
        }
      ];
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (selectedImage) {
      detectDisease();
    }
  };

  const resetDetection = () => {
    setResults(null);
    setSelectedImage(null);
    setShowCamera(false);
    stopCamera();
  };

  const getProbabilityColor = (probability: number) => {
    if (probability > 0.7) return "destructive";
    if (probability > 0.3) return "secondary";
    return "default";
  };

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case "critical": return "bg-red-600";
      case "high": return "bg-orange-600";
      case "moderate": return "bg-amber-600";
      case "low": return "bg-green-600";
      default: return "bg-slate-600";
    }
  };

  const getSeverityValue = (severity?: string) => {
    switch (severity) {
      case "critical": return 100;
      case "high": return 75;
      case "moderate": return 50;
      case "low": return 25;
      default: return 0;
    }
  };

  // Camera functionality
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setShowCamera(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL('image/png');
        setSelectedImage(imageDataUrl);
        stopCamera();
      }
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          {t('cropDiseaseDetection')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!results ? (
          <div className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  {t('uploadImage')}
                </TabsTrigger>
                <TabsTrigger value="camera" className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {t('takePhoto')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="space-y-4 pt-4">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
                  {selectedImage ? (
                    <div className="space-y-4 w-full">
                      <img 
                        src={selectedImage} 
                        alt="Selected crop image" 
                        className="max-h-48 rounded-lg mx-auto object-cover" 
                      />
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => setSelectedImage(null)}
                      >
                        {t('removeImage')}
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Drag and drop an image or click to browse</p>
                      <Input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        id="image-upload"
                        onChange={handleImageUpload}
                      />
                      <label htmlFor="image-upload">
                        <Button variant="outline" className="cursor-pointer" asChild>
                          <span>{t('browseFiles')}</span>
                        </Button>
                      </label>
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="camera" className="space-y-4 pt-4">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
                  {showCamera ? (
                    <div className="space-y-4 w-full">
                      <div className="relative">
                        <video 
                          ref={videoRef} 
                          autoPlay 
                          playsInline 
                          className="w-full rounded-lg" 
                        />
                        <canvas ref={canvasRef} className="hidden" />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1" 
                          onClick={stopCamera}
                        >
                          {t('cancel')}
                        </Button>
                        <Button 
                          className="flex-1" 
                          onClick={captureImage}
                        >
                          {t('capture')}
                        </Button>
                      </div>
                    </div>
                  ) : selectedImage ? (
                    <div className="space-y-4 w-full">
                      <img 
                        src={selectedImage} 
                        alt="Captured crop image" 
                        className="max-h-48 rounded-lg mx-auto object-cover" 
                      />
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => setSelectedImage(null)}
                      >
                        {t('removeImage')}
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Take a photo of your crop</p>
                      <Button variant="outline" onClick={startCamera}>
                        {t('openCamera')}
                      </Button>
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>
            
            {selectedImage && (
              <Button 
                className="w-full" 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    {t('analyzing')}
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    {t('analyze')} Image
                  </>
                )}
              </Button>
            )}

            <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-muted">
              <div className="flex items-center gap-1 mb-1">
                <Info className="h-3 w-3" />
                <span className="font-medium">{t('tipsForBetterDetection')}:</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc">
                <li>{t('ensureGoodLighting')}</li>
                <li>{t('focusOnAffectedParts')}</li>
                <li>{t('includeHealthyAndDiseased')}</li>
                <li>{t('takeMultipleImages')}</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{t('detectionResults')}</h3>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {results[0].firstDetected}
              </Badge>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {results.map((disease, index) => (
                <Button 
                  key={index} 
                  variant={selectedDisease === index ? "default" : "outline"}
                  className="flex-shrink-0"
                  onClick={() => setSelectedDisease(index)}
                >
                  <span className="mr-1">{disease.name}</span>
                  <Badge variant={getProbabilityColor(disease.probability)} className="ml-1">
                    {Math.round(disease.probability * 100)}%
                  </Badge>
                </Button>
              ))}
            </div>
            
            {results[selectedDisease] && (
              <div className="border rounded-lg p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-lg">{results[selectedDisease].name}</h4>
                      {results[selectedDisease].scientificName && (
                        <p className="text-xs italic text-muted-foreground">{results[selectedDisease].scientificName}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant={getProbabilityColor(results[selectedDisease].probability)}>
                        {Math.round(results[selectedDisease].probability * 100)}% Match
                      </Badge>
                      {results[selectedDisease].severity && (
                        <div className="flex items-center gap-1">
                          <span className="text-xs">Severity:</span>
                          <Progress 
                            value={getSeverityValue(results[selectedDisease].severity)} 
                            className={`h-1.5 w-16 ${getSeverityColor(results[selectedDisease].severity)}`} 
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {results[selectedDisease].affectedCrops && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {results[selectedDisease].affectedCrops.map((crop, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{crop}</Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5 text-warning" />
                        {t('symptoms')}
                      </h5>
                      <ul className="text-sm pl-5 list-disc space-y-1">
                        {results[selectedDisease].symptoms.map((symptom, i) => (
                          <li key={i}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium flex items-center gap-1">
                        <Pill className="h-3.5 w-3.5 text-primary" />
                        {t('treatment')}
                      </h5>
                      <p className="text-sm">{results[selectedDisease].treatment}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium flex items-center gap-1">
                        <Shield className="h-3.5 w-3.5 text-success" />
                        {t('prevention')}
                      </h5>
                      <ul className="text-sm pl-5 list-disc space-y-1">
                        {results[selectedDisease].preventionTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    {results[selectedDisease].environmentalConditions && (
                      <div>
                        <h5 className="text-sm font-medium flex items-center gap-1">
                          <Droplets className="h-3.5 w-3.5 text-blue-500" />
                          {t('favorableConditions')}
                        </h5>
                        <ul className="text-sm pl-5 list-disc space-y-1">
                          {results[selectedDisease].environmentalConditions.map((condition, i) => (
                            <li key={i}>{condition}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground cursor-help">
                          <Info className="h-3 w-3" />
                          <span>{t('spreadRate')}: {results[selectedDisease].spreadRate || "Unknown"}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">How quickly this disease can spread to other plants</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                    <Microscope className="h-3 w-3 mr-1" />
                    {t('viewDetailedReport')}
                  </Button>
                </div>
              </div>
            )}
            
            <Button onClick={resetDetection} variant="outline" className="w-full">
              {t('startNewDetection')}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}