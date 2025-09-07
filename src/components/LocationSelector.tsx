import { useState } from "react"
import { MapPin, ChevronDown, Navigation, Loader2, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "./LanguageProvider"
import { useLocation } from "./LocationProvider"

interface Location {
  state: string
  district: string
  city: string
}

const indianLocations: Location[] = [
  { state: "Punjab", district: "Ludhiana", city: "Ludhiana" },
  { state: "Punjab", district: "Amritsar", city: "Amritsar" },
  { state: "Haryana", district: "Karnal", city: "Karnal" },
  { state: "Haryana", district: "Hisar", city: "Hisar" },
  { state: "Uttar Pradesh", district: "Meerut", city: "Meerut" },
  { state: "Uttar Pradesh", district: "Agra", city: "Agra" },
  { state: "Maharashtra", district: "Pune", city: "Pune" },
  { state: "Maharashtra", district: "Nashik", city: "Nashik" },
  { state: "Karnataka", district: "Bangalore Rural", city: "Bangalore" },
  { state: "Karnataka", district: "Mysore", city: "Mysore" },
  { state: "Tamil Nadu", district: "Coimbatore", city: "Coimbatore" },
  { state: "Tamil Nadu", district: "Madurai", city: "Madurai" },
  { state: "Andhra Pradesh", district: "Krishna", city: "Vijayawada" },
  { state: "Andhra Pradesh", district: "Guntur", city: "Guntur" },
  { state: "Telangana", district: "Rangareddy", city: "Hyderabad" },
  { state: "Telangana", district: "Medak", city: "Medak" },
  { state: "Gujarat", district: "Ahmedabad", city: "Ahmedabad" },
  { state: "Gujarat", district: "Rajkot", city: "Rajkot" },
  { state: "Rajasthan", district: "Jaipur", city: "Jaipur" },
  { state: "Rajasthan", district: "Jodhpur", city: "Jodhpur" },
]

export function LocationSelector() {
  const { t } = useLanguage()
  const { location, isLoading, error, getCurrentLocation, setManualLocation } = useLocation()
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  const handleManualLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    // Set approximate coordinates for the selected location
    // These are rough estimates for demonstration
    const coordinates: { [key: string]: { lat: number; lng: number } } = {
      "Ludhiana": { lat: 30.9010, lng: 75.8573 },
      "Amritsar": { lat: 31.6340, lng: 74.8723 },
      "Karnal": { lat: 29.6857, lng: 76.9905 },
      "Hisar": { lat: 29.1667, lng: 75.7167 },
      "Meerut": { lat: 28.9845, lng: 77.7064 },
      "Agra": { lat: 27.1767, lng: 78.0081 },
      "Pune": { lat: 18.5204, lng: 73.8567 },
      "Nashik": { lat: 19.9975, lng: 73.7898 },
      "Bangalore": { lat: 12.9716, lng: 77.5946 },
      "Mysore": { lat: 12.2958, lng: 76.6394 },
      "Coimbatore": { lat: 11.0168, lng: 76.9558 },
      "Madurai": { lat: 9.9252, lng: 78.1198 },
      "Vijayawada": { lat: 16.5062, lng: 80.6480 },
      "Guntur": { lat: 16.3067, lng: 80.4365 },
      "Hyderabad": { lat: 17.3850, lng: 78.4867 },
      "Medak": { lat: 18.0333, lng: 78.2667 },
      "Ahmedabad": { lat: 23.0225, lng: 72.5714 },
      "Rajkot": { lat: 22.3039, lng: 70.8022 },
      "Jaipur": { lat: 26.9124, lng: 75.7873 },
      "Jodhpur": { lat: 26.2389, lng: 73.0243 }
    }
    
    const coords = coordinates[location.city]
    if (coords) {
      setManualLocation(coords.lat, coords.lng, location.city, location.state)
    }
  }

  const getLocationDisplayText = () => {
    if (location) {
      if (location.city && location.state) {
        return `${location.city}, ${location.state}`
      } else if (location.latitude && location.longitude) {
        return `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`
      }
    }
    if (selectedLocation) {
      return `${selectedLocation.city}, ${selectedLocation.state}`
    }
    return t('selectLocation')
  }

  const getLocationStatus = () => {
    if (isLoading) return { icon: Loader2, text: "Getting location...", color: "text-blue-500" }
    if (error) return { icon: AlertCircle, text: "Location error", color: "text-red-500" }
    if (location) return { icon: CheckCircle, text: "Location active", color: "text-green-500" }
    return { icon: MapPin, text: "No location", color: "text-muted-foreground" }
  }

  const status = getLocationStatus()

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 min-w-[180px] max-w-[250px] justify-start">
            <status.icon className={`h-4 w-4 ${status.color} ${isLoading ? 'animate-spin' : ''}`} />
            <span className="truncate">
              {getLocationDisplayText()}
            </span>
            <ChevronDown className="h-4 w-4 ml-auto text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[350px] max-h-[500px] overflow-y-auto">
          <DropdownMenuLabel className="flex items-center gap-2">
            <Navigation className="h-4 w-4" />
            Location Options
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={getCurrentLocation} disabled={isLoading}>
            <div className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="font-medium">Use Current Location</span>
                <span className="text-sm text-muted-foreground">Get GPS coordinates</span>
              </div>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Or select from list:</DropdownMenuLabel>
          
          {indianLocations.map((location, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleManualLocationSelect(location)}
              className={selectedLocation === location ? "bg-accent" : ""}
            >
              <div className="flex flex-col">
                <span className="font-medium">{location.city}</span>
                <span className="text-sm text-muted-foreground">
                  {location.district}, {location.state}
                </span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Compact Status Indicator */}
      {(location || error) && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background">
                {error ? (
                  <div className="w-full h-full rounded-full bg-red-500" />
                ) : location ? (
                  <div className="w-full h-full rounded-full bg-green-500" />
                ) : null}
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-[300px]">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <status.icon className={`h-4 w-4 ${status.color}`} />
                  <span className="font-medium">{status.text}</span>
                </div>
                
                {location && (
                  <>
                    {location.city && location.state && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span>{location.city}, {location.state}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <Navigation className="h-3 w-3 text-muted-foreground" />
                      <span className="font-mono text-xs">
                        {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                      </span>
                    </div>

                    {location.accuracy > 0 && (
                      <div className="text-xs text-muted-foreground">
                        Accuracy: ±{Math.round(location.accuracy)}m
                      </div>
                    )}

                    {location.address && (
                      <div className="text-xs text-muted-foreground max-w-[250px] break-words">
                        {location.address}
                      </div>
                    )}
                  </>
                )}
                
                {error && (
                  <div className="text-xs text-red-500">
                    {error}
                  </div>
                )}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}