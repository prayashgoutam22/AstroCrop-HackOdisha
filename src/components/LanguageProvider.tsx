import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi";

export const translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    yieldPredictor: "Yield Predictor",
    yieldCalculator: "Yield Calculator",
    weatherForecast: "Weather Forecast",
    soilAnalysis: "Soil Analysis",
    cropDiseaseDetection: "Crop Disease Detection",
    chatBot: "FasalGPT",
    agriAssistant: "FasalGPT",

    // Common
    location: "Location",
    selectLocation: "Select Location",
    state: "State",
    district: "District",
    city: "City",
    cropType: "Crop Type",
    selectCrop: "Select Crop",
    soilPH: "Soil pH",
    nitrogen: "Nitrogen (N)",
    phosphorus: "Phosphorus (P)",
    potassium: "Potassium (K)",
    area: "Area",
    temperature: "Temperature",
    humidity: "Humidity",
    rainfall: "Rainfall",
    calculate: "Calculate",
    predict: "Predict",
    analyze: "Analyze",
    upload: "Upload",
    camera: "Camera",
    takePhoto: "Take Photo",
    browseFiles: "Browse Files",
    removeImage: "Remove Image",
    cancel: "Cancel",
    capture: "Capture",
    openCamera: "Open Camera",
    analyzing: "Analyzing...",
    online: "Online",
    offline: "Offline",

    // Dashboard
    welcomeMessage: "🌾 Welcome to AstroCrop!",
    currentWeather: "Current Weather",
    yieldPrediction: "Yield Prediction",
    fertilizerRecommendation: "Fertilizer Recommendation",
    irrigationSchedule: "Irrigation Schedule",

    // Yield Calculator
    expectedYield: "Expected Yield",
    fertilizerAmount: "Fertilizer Amount",
    irrigationFrequency: "Irrigation Frequency",
    predictedYield: "Predicted Yield",
    totalYield: "Total Yield",
    confidence: "Confidence",
    recommendation: "Recommendation",

    // Units
    kgPerHectare: "kg/hectare",
    hectare: "hectare",
    celsius: "°C",
    percentage: "%",
    mm: "mm",
    days: "days",
    ppm: "ppm",
    kmh: "km/h",
    windSpeed: "Wind Speed",

    // Application Timing
    basalApplication: "Basal application: 50% at sowing",
    firstTopDressing: "First top dressing: 25% at 30 days",
    secondTopDressing: "Second top dressing: 25% at 60 days",

    // Weather Conditions
    partlyCloudy: "Partly Cloudy",
    clear: "Clear",
    cloudy: "Cloudy",
    lightRain: "Light Rain",
    locationNotSet: "Location not set",
    sevenDayForecast: "7-Day Forecast",
    lastUpdated: "Last updated",

    // Soil Analysis
    nutrients: "Nutrients",
    physical: "Physical",
    biological: "Biological",
    optimal: "Optimal",
    low: "Low",
    high: "High",
    critical: "Critical",
    nextSampling: "Next Sampling",
    sampleDepth: "Sample Depth",
    samplingMethod: "Sampling Method",
    recommendations: "Recommendations",
    historicalData: "Historical Data",
    download: "Download",

    // Disease Detection
    uploadImage: "Upload Image",
    detectionResults: "Detection Results",
    symptoms: "Symptoms",
    treatment: "Treatment",
    prevention: "Prevention",
    favorableConditions: "Favorable Conditions",
    spreadRate: "Spread Rate",
    viewDetailedReport: "View Detailed Report",
    startNewDetection: "Start New Detection",
    tipsForBetterDetection: "Tips for better detection",
    ensureGoodLighting: "Ensure good lighting conditions",
    focusOnAffectedParts: "Focus on affected plant parts",
    includeHealthyAndDiseased:
      "Include both healthy and diseased tissue for comparison",
    takeMultipleImages: "Take multiple images from different angles",

    // Fertilizer
    npkRequirements: "NPK Requirements",
    recommendedProducts: "Recommended Products",
    applicationSchedule: "Application Schedule",
    amount: "Amount",
    warnings: "Warnings",
    next: "Next",
    soilPh: "Soil pH",
    organicMatter: "Organic Matter",
    applicationNotes: "Application Notes",

    // Chat Bot
    agriAssistant: "FasalGPT",
    askAboutCrops: "Ask about crops, weather, fertilizers...",
    botIsTyping: "Bot is typing...",
    quickQuestions: "Quick questions",
    continueConversation: "Continue the conversation",
    relatedTopics: "Related topics",
    riceCultivationGuide: "Rice cultivation guide",
    wheatFertilizerSchedule: "Wheat fertilizer schedule",
    soilPhManagement: "Soil pH management",
    pestControlForCrops: "Pest control for crops",
    irrigationTiming: "Irrigation timing",
    yieldPredictionMethods: "Yield prediction methods",

    // Location
    gettingLocation: "Getting location...",
    locationError: "Location error",
    locationActive: "Location active",
    noLocationSet: "No location set",
  },
  hi: {
    // Navigation - Hindi
    dashboard: "डैशबोर्ड",
    yieldPredictor: "उत्पादन पूर्वानुमान",
    yieldCalculator: "उत्पादन कैलकुलेटर",
    weatherForecast: "मौसम पूर्वानुमान",
    soilAnalysis: "मिट्टी विश्लेषण",
    cropDiseaseDetection: "फसल रोग पहचान",
    chatBot: "फसलGPT",

    // Common - Hindi
    location: "स्थान",
    selectLocation: "स्थान चुनें",
    state: "राज्य",
    district: "जिला",
    city: "शहर",
    cropType: "फसल का प्रकार",
    selectCrop: "फसल चुनें",
    soilPH: "मिट्टी का pH",
    nitrogen: "नाइट्रोजन (N)",
    phosphorus: "फास्फोरस (P)",
    potassium: "पोटेशियम (K)",
    area: "क्षेत्रफल",
    temperature: "तापमान",
    humidity: "आर्द्रता",
    rainfall: "वर्षा",
    calculate: "गणना करें",
    predict: "भविष्यवाणी करें",
    analyze: "विश्लेषण करें",
    upload: "अपलोड करें",
    camera: "कैमरा",
    takePhoto: "फोटो लें",
    browseFiles: "फाइलें ब्राउज़ करें",
    removeImage: "छवि हटाएं",
    cancel: "रद्द करें",
    capture: "कैप्चर करें",
    openCamera: "कैमरा खोलें",
    analyzing: "विश्लेषण हो रहा है...",
    online: "ऑनलाइन",
    offline: "ऑफलाइन",

    // Dashboard - Hindi
    welcomeMessage: "🌾 AstroCrop में आपका स्वागत है!",
    currentWeather: "वर्तमान मौसम",
    yieldPrediction: "उत्पादन पूर्वानुमान",
    fertilizerRecommendation: "उर्वरक सिफारिश",
    irrigationSchedule: "सिंचाई अनुसूची",

    // Yield Calculator - Hindi
    expectedYield: "अपेक्षित उत्पादन",
    fertilizerAmount: "उर्वरक की मात्रा",
    irrigationFrequency: "सिंचाई की आवृत्ति",
    predictedYield: "पूर्वानुमानित उत्पादन",
    totalYield: "कुल उत्पादन",
    confidence: "विश्वसनीयता",
    recommendation: "सिफारिश",

    // Units - Hindi
    kgPerHectare: "किग्रा/हेक्टेयर",
    hectare: "हेक्टेयर",
    celsius: "°C",
    percentage: "%",
    mm: "मिमी",
    days: "दिन",
    ppm: "पीपीएम",
    kmh: "किमी/घंटा",
    windSpeed: "हवा की गति",

    // Application Timing - Hindi
    basalApplication: "आधारिक अनुप्रयोग: बुवाई पर 50%",
    firstTopDressing: "पहली शीर्ष ड्रेसिंग: 30 दिन पर 25%",
    secondTopDressing: "दूसरी शीर्ष ड्रेसिंग: 60 दिन पर 25%",

    // Weather Conditions - Hindi
    partlyCloudy: "आंशिक रूप से बादल",
    clear: "साफ",
    cloudy: "बादल",
    lightRain: "हल्की बारिश",
    locationNotSet: "स्थान सेट नहीं है",
    sevenDayForecast: "7-दिन का पूर्वानुमान",
    lastUpdated: "अंतिम अपडेट",

    // Soil Analysis - Hindi
    nutrients: "पोषक तत्व",
    physical: "भौतिक",
    biological: "जैविक",
    optimal: "इष्टतम",
    low: "कम",
    high: "उच्च",
    critical: "गंभीर",
    nextSampling: "अगला नमूना",
    sampleDepth: "नमूना गहराई",
    samplingMethod: "नमूना विधि",
    recommendations: "सिफारिशें",
    historicalData: "ऐतिहासिक डेटा",
    download: "डाउनलोड",

    // Disease Detection - Hindi
    uploadImage: "छवि अपलोड करें",
    detectionResults: "पहचान परिणाम",
    symptoms: "लक्षण",
    treatment: "उपचार",
    prevention: "रोकथाम",
    favorableConditions: "अनुकूल परिस्थितियां",
    spreadRate: "फैलाव दर",
    viewDetailedReport: "विस्तृत रिपोर्ट देखें",
    startNewDetection: "नई पहचान शुरू करें",
    tipsForBetterDetection: "बेहतर पहचान के लिए सुझाव",
    ensureGoodLighting: "अच्छी रोशनी सुनिश्चित करें",
    focusOnAffectedParts: "प्रभावित पौधे के हिस्सों पर ध्यान दें",
    includeHealthyAndDiseased:
      "तुलना के लिए स्वस्थ और रोगग्रस्त दोनों ऊतक शामिल करें",
    takeMultipleImages: "विभिन्न कोणों से कई छवियां लें",

    // Fertilizer - Hindi
    npkRequirements: "NPK आवश्यकताएं",
    recommendedProducts: "अनुशंसित उत्पाद",
    applicationSchedule: "अनुप्रयोग अनुसूची",
    amount: "मात्रा",
    warnings: "चेतावनियां",
    next: "अगला",
    soilPh: "मिट्टी का pH",
    organicMatter: "कार्बनिक पदार्थ",
    applicationNotes: "अनुप्रयोग नोट्स",

    // Chat Bot - Hindi
    agriAssistant: "फसलGPT",
    askAboutCrops: "फसलों, मौसम, उर्वरकों के बारे में पूछें...",
    botIsTyping: "बॉट टाइप कर रहा है...",
    quickQuestions: "त्वरित प्रश्न",
    continueConversation: "बातचीत जारी रखें",
    relatedTopics: "संबंधित विषय",
    riceCultivationGuide: "चावल की खेती गाइड",
    wheatFertilizerSchedule: "गेहूं उर्वरक अनुसूची",
    soilPhManagement: "मिट्टी pH प्रबंधन",
    pestControlForCrops: "फसलों के लिए कीट नियंत्रण",
    irrigationTiming: "सिंचाई समय",
    yieldPredictionMethods: "उत्पादन पूर्वानुमान विधियां",

    // Location - Hindi
    gettingLocation: "स्थान प्राप्त कर रहे हैं...",
    locationError: "स्थान त्रुटि",
    locationActive: "स्थान सक्रिय",
    noLocationSet: "कोई स्थान सेट नहीं है",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem(
      "crop-optima-language"
    ) as Language;
    return savedLanguage && translations[savedLanguage] ? savedLanguage : "en";
  });

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    // If translation not found in current language, try English as fallback
    if (!value && language !== "en") {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
    }

    return value || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("crop-optima-language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
