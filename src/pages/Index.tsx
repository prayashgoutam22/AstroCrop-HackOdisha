import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";
import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { WeatherCard } from "@/components/WeatherCard";
import { YieldPredictionCard } from "@/components/YieldPredictionCard";
import { FertilizerRecommendationCard } from "@/components/FertilizerRecommendationCard";
import { OptimizedIrrigationSchedule } from "@/components/OptimizedIrrigationSchedule";
import { LocationStatusCard } from "@/components/LocationStatusCard";
import { CropDiseaseDetection } from "@/components/CropDiseaseDetection";
import { SoilAnalysisCard } from "@/components/SoilAnalysisCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, TestTube, BarChart3, TrendingUp, MapPin, Calendar, Beaker, AlertCircle } from "lucide-react";
import agriculturalHero from "@/assets/agricultural-hero.jpg";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Optimized */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${agriculturalHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t("welcomeMessage")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Farming just got smarter. With AstroCrop, you can easily predict crop yields, plan irrigation, and use the right fertilizers at the right time. Simple, reliable, and farmer-friendly—helping you grow more while saving time, money, and resources.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  AI-Powered Predictions
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Droplets className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Smart Irrigation</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-warning/10 border border-warning/20">
                <TestTube className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">
                  Nutrient Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Optimized */}
      <section className="container mx-auto px-4 py-4 md:py-6">

        <Tabs value={activeTab} className="w-full" onValueChange={(value) => {
          console.log(`Tab changing to: ${value}`);
          if (value === "soil") {
            navigate('/soil');
          } else {
            setActiveTab(value);
          }
        }}>
          <TabsList className="grid w-full grid-cols-5 mb-4 md:mb-6">
            <TabsTrigger value="dashboard" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">{t("dashboard")}</span>
            </TabsTrigger>
            <TabsTrigger value="predictor" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">{t("yieldPredictor")}</span>
            </TabsTrigger>
            <TabsTrigger value="irrigation" className="gap-2">
              <Droplets className="h-4 w-4" />
              <span className="hidden sm:inline">Irrigation</span>
            </TabsTrigger>
            <TabsTrigger value="soil" className="gap-2">
              <Beaker className="h-4 w-4" />
              <span className="hidden sm:inline">Soil & Disease</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">{t("weatherForecast")}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6">
              {/* Main Content Area */}
              <div className="xl:col-span-3 space-y-4 md:space-y-6">
                {/* Top Row - Weather and Yield */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div className="h-full">
                    <WeatherCard showForecast={false} />
                  </div>
                  <div className="h-full">
                    <YieldPredictionCard />
                  </div>
                </div>
                
                {/* Bottom Row - Fertilizer and Quick Stats */}
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div className="h-full">
                    <FertilizerRecommendationCard />
                  </div>
                  <div className="flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-1.5 md:p-2 rounded-lg border border-green-200 dark:border-green-800 flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="h-3 w-3 md:h-3.5 md:w-3.5 text-green-600" />
                          <span className="text-xs font-medium text-green-800 dark:text-green-200">Expected Yield</span>
                        </div>
                        <div className="flex items-baseline justify-between mt-0.5">
                          <p className="text-base md:text-lg font-bold text-green-700 dark:text-green-300">4.2 tons</p>
                          <p className="text-xs text-green-600 dark:text-green-400">per hectare</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-1.5 md:p-2 rounded-lg border border-blue-200 dark:border-blue-800 flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <Droplets className="h-3 w-3 md:h-3.5 md:w-3.5 text-blue-600" />
                          <span className="text-xs font-medium text-blue-800 dark:text-blue-200">Water Usage</span>
                        </div>
                        <div className="flex items-baseline justify-between mt-0.5">
                          <p className="text-base md:text-lg font-bold text-blue-700 dark:text-blue-300">215mm</p>
                          <p className="text-xs text-blue-600 dark:text-blue-400">this season</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-4 md:space-y-6">
                <LocationStatusCard />
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 p-2 md:p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <TestTube className="h-3.5 w-3.5 md:h-4 md:w-4 text-orange-600" />
                    <span className="text-xs font-medium text-orange-800 dark:text-orange-200">Soil Health</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-orange-700 dark:text-orange-300">pH Level</span>
                      <span className="font-medium text-orange-800 dark:text-orange-200">6.8</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-orange-700 dark:text-orange-300">Organic Matter</span>
                      <span className="font-medium text-orange-800 dark:text-orange-200">2.4%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-orange-700 dark:text-orange-300">Moisture</span>
                      <span className="font-medium text-orange-800 dark:text-orange-200">Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="predictor" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="h-full">
                <YieldPredictionCard />
              </div>
              <div className="h-full space-y-4 md:space-y-6">
                <FertilizerRecommendationCard />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="irrigation" className="space-y-4 md:space-y-6">
            <OptimizedIrrigationSchedule />
          </TabsContent>

          {/* Soil & Disease tab content is now in a separate page */}

          <TabsContent value="weather" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6">
              <div className="xl:col-span-3 h-full">
                <WeatherCard showForecast={true} />
              </div>
              <div className="h-full space-y-4 md:space-y-6">
                <LocationStatusCard />
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-2 md:p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-purple-600" />
                    <span className="text-xs font-medium text-purple-800 dark:text-purple-200">Field Status</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-700 dark:text-purple-300">Last Irrigation</span>
                      <span className="font-medium text-purple-800 dark:text-purple-200">2 days ago</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-700 dark:text-purple-300">Next Scheduled</span>
                      <span className="font-medium text-purple-800 dark:text-purple-200">Tomorrow</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-700 dark:text-purple-300">Soil Moisture</span>
                      <span className="font-medium text-purple-800 dark:text-purple-200">Optimal</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 p-2 md:p-3 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 text-indigo-600" />
                    <span className="text-xs font-medium text-indigo-800 dark:text-indigo-200">Weather Alerts</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-indigo-700 dark:text-indigo-300">
                      • Light rain expected tomorrow
                    </div>
                    <div className="text-xs text-indigo-700 dark:text-indigo-300">
                      • Temperature will drop 3°C
                    </div>
                    <div className="text-xs text-indigo-700 dark:text-indigo-300">
                      • Wind speed increasing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer - Optimized */}
      <footer className="border-t bg-muted/30 mt-8 md:mt-12">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 CropPredict - AI-Powered Agricultural Solutions</p>
            <p className="mt-1 md:mt-2">
              Empowering farmers with data-driven insights for sustainable
              agriculture
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
