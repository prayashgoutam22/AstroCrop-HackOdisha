import { TestTube, Beaker, Scale, Leaf, Info, Calendar, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "./LanguageProvider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface FertilizerRecommendation {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  totalAmount: number;
  applicationTiming: string[];
  soilpH: number;
  organicMatter: string;
  recommendedProducts: {
    name: string;
    npkRatio: string;
    amountPerHectare: number;
  }[];
  applicationNotes: string;
  nextApplicationDate: string;
  warningFlags: string[];
}

export function FertilizerRecommendationCard() {
  const { t } = useLanguage();

  // Mock recommendation data - in real app, this would come from ML model
  const recommendation: FertilizerRecommendation = {
    nitrogen: 120,
    phosphorus: 60,
    potassium: 40,
    totalAmount: 220,
    applicationTiming: [
      t("basalApplication"),
      t("firstTopDressing"),
      t("secondTopDressing"),
    ],
    soilpH: 6.8,
    organicMatter: "2.4%",
    recommendedProducts: [
      {
        name: "Premium NPK Blend",
        npkRatio: "20-10-10",
        amountPerHectare: 150
      },
      {
        name: "Phosphate Plus",
        npkRatio: "0-45-0",
        amountPerHectare: 70
      }
    ],
    applicationNotes: "Apply in moist soil conditions. Split nitrogen application to reduce leaching.",
    nextApplicationDate: "June 15, 2023",
    warningFlags: ["Low organic matter", "Potential nitrogen leaching risk"]
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TestTube className="h-5 w-5 text-primary" />
            {t("fertilizerRecommendation")}
          </div>
          <div className="flex items-center gap-2">
            {recommendation.warningFlags.length > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="space-y-1 max-w-xs">
                      <p className="font-medium">{t('warnings')}:</p>
                      <ul className="list-disc pl-4 text-xs">
                        {recommendation.warningFlags.map((flag, i) => (
                          <li key={i}>{flag}</li>
                        ))}
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <Badge variant="outline" className="flex items-center gap-1 text-xs">
              <Calendar className="h-3 w-3" />
              {t('next')}: {recommendation.nextApplicationDate}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - NPK Breakdown */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-1">
              <Scale className="h-4 w-4" />
              {t('npkRequirements')}
            </h4>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    N
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs">{t("nitrogen")}</span>
                    <span className="text-xs font-bold">
                      {recommendation.nitrogen} kg
                    </span>
                  </div>
                  <Progress
                    value={(recommendation.nitrogen / 150) * 100}
                    className="h-1.5"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600 dark:text-red-400">
                    P
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs">{t("phosphorus")}</span>
                    <span className="text-xs font-bold">
                      {recommendation.phosphorus} kg
                    </span>
                  </div>
                  <Progress
                    value={(recommendation.phosphorus / 80) * 100}
                    className="h-1.5"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                    K
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs">{t("potassium")}</span>
                    <span className="text-xs font-bold">
                      {recommendation.potassium} kg
                    </span>
                  </div>
                  <Progress
                    value={(recommendation.potassium / 60) * 100}
                    className="h-1.5"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-gradient-primary/10 border border-primary/20">
              <span className="text-muted-foreground">{t("fertilizerAmount")}</span>
              <span className="font-bold text-primary">{recommendation.totalAmount} kg/ha</span>
            </div>

            <div className="flex flex-col gap-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('soilPh')}</span>
                <span className="font-medium">{recommendation.soilpH}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('organicMatter')}</span>
                <span className="font-medium">{recommendation.organicMatter}</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Products & Application */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-1">
              <Leaf className="h-4 w-4" />
              {t('recommendedProducts')}
            </h4>
            
            <div className="space-y-2">
              {recommendation.recommendedProducts.map((product, index) => (
                <div key={index} className="p-2 rounded bg-muted/50 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{product.name}</span>
                    <Badge variant="secondary" className="text-[10px]">{product.npkRatio}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('amount')}</span>
                    <span className="font-medium">{product.amountPerHectare} kg/ha</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2 rounded bg-muted/30 border border-muted text-xs">
              <div className="flex items-start gap-1 mb-1">
                <Info className="h-3 w-3 mt-0.5 flex-shrink-0 text-muted-foreground" />
                <p className="text-muted-foreground">{recommendation.applicationNotes}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Application Timing */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-1">
              <Beaker className="h-4 w-4" />
              {t('applicationSchedule')}
            </h4>
            
            <div className="space-y-2">
              {recommendation.applicationTiming.map((timing, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded bg-muted/50"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {index + 1}
                  </div>
                  <span className="text-xs">{timing}</span>
                </div>
              ))}
            </div>

            <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-muted">
              <p>These recommendations are based on soil analysis and crop requirements. Adjust application rates based on soil test results and local agricultural extension advice.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
