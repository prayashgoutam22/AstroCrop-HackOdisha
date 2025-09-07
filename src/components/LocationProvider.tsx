import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface LocationData {
  latitude: number
  longitude: number
  accuracy: number
  altitude?: number
  altitudeAccuracy?: number
  heading?: number
  speed?: number
  timestamp?: number
  city?: string
  state?: string
  country?: string
  address?: string
}

interface LocationContextType {
  location: LocationData | null
  isLoading: boolean
  error: string | null
  getCurrentLocation: () => void
  setManualLocation: (lat: number, lng: number, city?: string, state?: string) => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reverseGeocode = async (lat: number, lng: number): Promise<{ city?: string; state?: string; country?: string; address?: string }> => {
    try {
      // Using a free reverse geocoding service (Nominatim)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'CropPredict-App/1.0'
          }
        }
      )
      
      if (!response.ok) {
        throw new Error('Reverse geocoding failed')
      }
      
      const data = await response.json()
      
      return {
        city: data.address?.city || data.address?.town || data.address?.village,
        state: data.address?.state,
        country: data.address?.country,
        address: data.display_name
      }
    } catch (error) {
      console.warn('Reverse geocoding failed:', error)
      return {}
    }
  }

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser")
      return
    }

    setIsLoading(true)
    setError(null)

    // Try to get high accuracy position first
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed, timestamp } = position.coords
        
        // Get location details through reverse geocoding
        const locationDetails = await reverseGeocode(latitude, longitude)
        
        setLocation({
          latitude,
          longitude,
          accuracy,
          altitude,
          altitudeAccuracy,
          heading,
          speed,
          timestamp: position.timestamp,
          ...locationDetails
        })
        setIsLoading(false)
      },
      (error) => {
        // If high accuracy fails, try with lower accuracy
        if (error.code === error.TIMEOUT || error.code === error.POSITION_UNAVAILABLE) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude, accuracy } = position.coords
              
              // Get location details through reverse geocoding
              const locationDetails = await reverseGeocode(latitude, longitude)
              
              setLocation({
                latitude,
                longitude,
                accuracy,
                timestamp: position.timestamp,
                ...locationDetails
              })
              setIsLoading(false)
            },
            (fallbackError) => {
              handleLocationError(fallbackError)
            },
            {
              enableHighAccuracy: false,
              timeout: 15000,
              maximumAge: 300000 // 5 minutes
            }
          )
        } else {
          handleLocationError(error)
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000 // 1 minute for high accuracy data
      }
    )
  }

  const handleLocationError = (error: GeolocationPositionError) => {
    let errorMessage = "Failed to get location"
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Location access denied by user"
        break
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information unavailable"
        break
      case error.TIMEOUT:
        errorMessage = "Location request timed out"
        break
    }
    setError(errorMessage)
    setIsLoading(false)
  }

  const setManualLocation = (lat: number, lng: number, city?: string, state?: string) => {
    setLocation({
      latitude: lat,
      longitude: lng,
      accuracy: 0, // Manual location has no accuracy
      city,
      state,
      country: "India"
    })
    setError(null)
  }

  // Set up continuous location tracking with watchPosition
  useEffect(() => {
    if (!navigator.geolocation) return
    
    let watchId: number | null = null
    
    // Check if we have permission first
    navigator.geolocation.getCurrentPosition(
      () => {
        // Permission granted, get initial location and set up watch
        getCurrentLocation()
        
        // Set up continuous location tracking for better accuracy
        watchId = navigator.geolocation.watchPosition(
          async (position) => {
            const { latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed } = position.coords
            
            // Only update if accuracy is better than what we have or location has changed significantly
            if (!location || 
                accuracy < location.accuracy || 
                Math.abs(latitude - location.latitude) > 0.0001 || 
                Math.abs(longitude - location.longitude) > 0.0001) {
              
              // Get location details through reverse geocoding only if location changed significantly
              let locationDetails = {}
              if (!location || 
                  Math.abs(latitude - location.latitude) > 0.001 || 
                  Math.abs(longitude - location.longitude) > 0.001) {
                locationDetails = await reverseGeocode(latitude, longitude)
              } else if (location.city) {
                // Keep existing location details if we have them
                locationDetails = {
                  city: location.city,
                  state: location.state,
                  country: location.country,
                  address: location.address
                }
              }
              
              setLocation({
                latitude,
                longitude,
                accuracy,
                altitude,
                altitudeAccuracy,
                heading,
                speed,
                timestamp: position.timestamp,
                ...locationDetails
              })
            }
          },
          (error) => {
            // Only set error if we don't already have a location
            if (!location) {
              handleLocationError(error)
            }
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 60000 // 1 minute
          }
        )
      },
      () => {
        // Permission denied or error, don't auto-request
      },
      { timeout: 1000 }
    )
    
    // Clean up watch on unmount
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId)
      }
    }
  }, [])

  return (
    <LocationContext.Provider value={{
      location,
      isLoading,
      error,
      getCurrentLocation,
      setManualLocation
    }}>
      {children}
    </LocationContext.Provider>
  )
}

export function useLocation() {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}
