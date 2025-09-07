import { useState, useEffect } from "react";
import {
  Cloud,
  Droplets,
  Thermometer,
  Wind,
  MapPin,
  Loader2,
  AlertCircle,
  RefreshCw,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import { useLocation } from "./LocationProvider";
import { WeatherService, WeatherData } from "@/services/weatherService";

// WeatherData interface is now imported from weatherService

interface WeatherCardProps {
  weatherData?: WeatherData;
  showForecast?: boolean;
}

export function WeatherCard({
  weatherData,
  showForecast = false,
}: WeatherCardProps) {
  const { t } = useLanguage();
  const { location } = useLocation();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Default mock data for demo when no location is set
  const mockWeather: WeatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 2.5,
    windSpeed: 12,
    condition: t("partlyCloudy"),
    lastUpdated: new Date().toLocaleTimeString(),
    forecast: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i + 1);
      return {
        date: date.toLocaleDateString(),
        temperature: Math.round(25 + (Math.random() - 0.5) * 8),
        humidity: Math.round(60 + (Math.random() - 0.5) * 20),
        rainfall: Math.max(0, Math.random() * 8),
        windSpeed: Math.round(8 + (Math.random() - 0.5) * 10),
        condition: ["Clear", "Partly Cloudy", "Cloudy", "Light Rain"][
          Math.floor(Math.random() * 4)
        ],
      };
    }),
  };

  const fetchWeatherData = async (lat: number, lng: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const weatherData = await WeatherService.fetchWeatherData(lat, lng);
      setWeather(weatherData);
    } catch (err) {
      console.warn("Weather API failed, using location-based mock data:", err);
      // Fallback to location-based mock data
      const locationBasedWeather = WeatherService.generateLocationBasedWeather(
        lat,
        lng
      );
      setWeather(locationBasedWeather);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch weather data when location changes
  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    } else {
      setWeather(null);
    }
  }, [location?.latitude, location?.longitude]);

  const handleRefresh = () => {
    if (location?.latitude && location?.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  };

  const getLocationDisplay = () => {
    if (location) {
      if (location.city && location.state) {
        return `${location.city}, ${location.state}`;
      } else if (location.latitude && location.longitude) {
        return `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(
          4
        )}`;
      }
    }
    return t("locationNotSet");
  };

  const currentWeather = weatherData || weather || mockWeather;

  return (
    <Card className="shadow-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            {t("currentWeather")}
            {isLoading && (
              <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span
                className="truncate max-w-[120px]"
                title={getLocationDisplay()}
              >
                {getLocationDisplay()}
              </span>
            </div>
            {location && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
                className="h-6 w-6 p-0"
              >
                <RefreshCw
                  className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`}
                />
              </Button>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="grid grid-cols-2 gap-4 flex-grow">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Thermometer className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm text-muted-foreground">
                {t("temperature")}
              </p>
              <p className="text-lg font-semibold">
                {currentWeather.temperature}°C
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">{t("humidity")}</p>
              <p className="text-lg font-semibold">
                {currentWeather.humidity}%
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Cloud className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-muted-foreground">{t("rainfall")}</p>
              <p className="text-lg font-semibold">
                {currentWeather.rainfall.toFixed(1)}mm
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Wind className="h-5 w-5 text-teal-500" />
            <div>
              <p className="text-sm text-muted-foreground">{t('windSpeed')}</p>
              <p className="text-lg font-semibold">
                {currentWeather.windSpeed} {t('kmh')}
              </p>
            </div>
          </div>
        </div>

        {currentWeather.lastUpdated && (
          <div className="mt-4 text-xs text-muted-foreground text-center">
            {t('lastUpdated')}: {currentWeather.lastUpdated}
          </div>
        )}

        {showForecast && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{t("sevenDayForecast")}</span>
            </div>

            {currentWeather.forecast && (
              <div className="space-y-2">
                {currentWeather.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-lg bg-muted/50 text-xs"
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{day.date}</div>
                      <div className="text-muted-foreground">
                        {day.condition}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1 mt-1">
                      <div className="flex items-center gap-1">
                        <Thermometer className="h-3 w-3 text-orange-500" />
                        <span>{day.temperature}°C</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Droplets className="h-3 w-3 text-blue-500" />
                        <span>{day.humidity}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Cloud className="h-3 w-3 text-gray-500" />
                        <span>{day.rainfall.toFixed(1)}mm</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wind className="h-3 w-3 text-teal-500" />
                        <span>{day.windSpeed}{t('kmh')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
