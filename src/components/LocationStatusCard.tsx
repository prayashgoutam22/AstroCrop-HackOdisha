import { MapPin, Navigation, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLocation } from "./LocationProvider"
import { useLanguage } from "./LanguageProvider"

export function LocationStatusCard() {
  const { location, isLoading, error } = useLocation()
  const { t } = useLanguage()

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
    if (error) return <AlertCircle className="h-4 w-4 text-red-500" />
    if (location) return <CheckCircle className="h-4 w-4 text-green-500" />
    return <MapPin className="h-4 w-4 text-muted-foreground" />
  }

  const getStatusText = () => {
    if (isLoading) return "Getting location..."
    if (error) return "Location error"
    if (location) return "Location active"
    return "No location set"
  }

  const getLocationDetails = () => {
    if (!location) return null

    return (
      <div className="space-y-2 text-sm">
        {location.city && location.state && (
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-muted-foreground" />
            <span>{location.city}, {location.state}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Navigation className="h-3 w-3 text-muted-foreground" />
          <span>{location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}</span>
        </div>

        {location.accuracy > 0 && (
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              ±{Math.round(location.accuracy)}m accuracy
            </Badge>
          </div>
        )}

        {location.address && (
          <div className="text-xs text-muted-foreground truncate" title={location.address}>
            {location.address}
          </div>
        )}
      </div>
    )
  }

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getStatusIcon()}
          Location Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{getStatusText()}</span>
          </div>
          
          {getLocationDetails()}
          
          {error && (
            <div className="text-xs text-red-500 bg-red-50 p-2 rounded border">
              {error}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
