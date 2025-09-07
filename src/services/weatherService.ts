// Weather service utility for fetching weather data
export interface WeatherApiResponse {
  main: {
    temp: number
    humidity: number
  }
  wind: {
    speed: number
  }
  rain?: {
    '1h'?: number
  }
  weather: Array<{
    description: string
  }>
}

export interface ForecastDay {
  date: string
  temperature: number
  condition: string
  rainfall: number
  humidity: number
  windSpeed: number
}

export interface WeatherData {
  temperature: number
  humidity: number
  rainfall: number
  windSpeed: number
  condition: string
  lastUpdated?: string
  forecast?: ForecastDay[]
}

export class WeatherService {
  private static readonly API_BASE_URL = 'https://api.openweathermap.org/data/2.5'
  private static readonly DEMO_API_KEY = 'demo' // In production, use a real API key

  static async fetchWeatherData(lat: number, lng: number): Promise<WeatherData> {
    try {
      const response = await fetch(
        `${this.API_BASE_URL}/weather?lat=${lat}&lon=${lng}&appid=${this.DEMO_API_KEY}&units=metric`
      )

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`)
      }

      const data: WeatherApiResponse = await response.json()
      
      // Generate a 7-day forecast
      const forecast = this.generateForecast(lat, lng)
      
      return {
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        rainfall: data.rain?.['1h'] || 0,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        condition: data.weather[0].description,
        lastUpdated: new Date().toLocaleTimeString(),
        forecast
      }
    } catch (error) {
      console.warn('Weather API failed:', error)
      throw error
    }
  }

  static generateLocationBasedWeather(lat: number, lng: number): WeatherData {
    // Generate realistic weather data based on location coordinates
    const today = new Date()
    const currentMonth = today.getMonth() // 0-11
    
    // Temperature varies with latitude and season
    const isNorthernHemisphere = lat > 0
    const seasonalFactor = isNorthernHemisphere ? 
      Math.sin(((currentMonth + 9) % 12) / 12 * 2 * Math.PI) : // Northern hemisphere
      Math.sin(((currentMonth + 3) % 12) / 12 * 2 * Math.PI)   // Southern hemisphere
    
    // Base temperature depends on latitude (equator is warmer)
    const baseTemp = 25 + Math.sin(lat * Math.PI / 180) * 10
    const seasonalVariation = seasonalFactor * 8
    
    // Humidity based on proximity to equator and oceans (simplified model)
    const humidityBase = 60 + Math.cos(lat * Math.PI / 90) * 15
    
    // Generate a 7-day forecast
    const forecast = this.generateForecast(lat, lng)
    
    // Current weather should be consistent with forecast trends
    const condition = this.getWeatherConditionWithTrend(forecast[0].condition)
    const isRainy = condition.includes('Rain') || condition.includes('Thunderstorm')
    const rainfallAmount = isRainy ? 1 + Math.random() * 4 : Math.random() * 0.5
    
    return {
      temperature: Math.round(baseTemp + seasonalVariation + (Math.random() - 0.5) * 3),
      humidity: Math.round(humidityBase + (Math.random() - 0.5) * 10),
      rainfall: rainfallAmount,
      windSpeed: Math.round(8 + (Math.random() - 0.5) * 8),
      condition: condition,
      lastUpdated: new Date().toLocaleTimeString(),
      forecast
    }
  }

  static generateForecast(lat: number, lng: number): ForecastDay[] {
    const forecast: ForecastDay[] = []
    const today = new Date()
    
    // Base temperature and seasonal variation based on latitude
    const baseTemp = 25 + Math.sin(lat * Math.PI / 180) * 10
    
    // More accurate seasonal variation based on current month
    const currentMonth = today.getMonth() // 0-11
    const isNorthernHemisphere = lat > 0
    const seasonalFactor = isNorthernHemisphere ? 
      Math.sin(((currentMonth + 9) % 12) / 12 * 2 * Math.PI) : // Northern hemisphere
      Math.sin(((currentMonth + 3) % 12) / 12 * 2 * Math.PI)   // Southern hemisphere
    const seasonalVariation = seasonalFactor * 8 // More pronounced seasonal effect
    
    // Humidity base based on proximity to equator and oceans (simplified model)
    const humidityBase = 60 + Math.cos(lat * Math.PI / 90) * 15
    
    // Previous day's condition to ensure weather patterns are more realistic
    let prevCondition = this.getRandomCondition()
    
    // Generate forecast for next 7 days
    for (let i = 1; i <= 7; i++) {
      const forecastDate = new Date(today)
      forecastDate.setDate(today.getDate() + i)
      
      // More realistic variations with smaller day-to-day changes
      // Temperature varies less from one day to the next
      const tempVariation = (Math.random() - 0.5) * 4 + (i > 1 ? (forecast[i-2].temperature - baseTemp - seasonalVariation) * 0.3 : 0)
      
      // Humidity has some correlation with previous day
      const humidityVariation = (Math.random() - 0.5) * 15 + (i > 1 ? (forecast[i-2].humidity - humidityBase) * 0.4 : 0)
      
      // Rainfall depends on condition - use the new getWeatherConditionWithTrend method for more accurate forecast
      const condition = this.getWeatherConditionWithTrend(prevCondition)
      prevCondition = condition
      const isRainy = condition.includes('Rain') || condition.includes('Thunderstorm')
      const rainfallBase = isRainy ? 2 + Math.random() * 6 : Math.random() * 0.5
      
      // Wind varies less dramatically
      const windVariation = (Math.random() - 0.5) * 8 + (i > 1 ? (forecast[i-2].windSpeed - 8) * 0.3 : 0)
      
      forecast.push({
        date: forecastDate.toLocaleDateString(),
        temperature: Math.round(baseTemp + seasonalVariation + tempVariation),
        humidity: Math.round(humidityBase + humidityVariation),
        rainfall: Math.max(0, rainfallBase),
        windSpeed: Math.round(8 + windVariation),
        condition: condition
      })
    }
    
    return forecast
  }

  private static getRandomCondition(): string {
    const conditions = [
      "Clear", "Partly Cloudy", "Cloudy", "Light Rain", 
      "Moderate Rain", "Heavy Rain", "Thunderstorm", "Fog"
    ]
    return conditions[Math.floor(Math.random() * conditions.length)]
  }
  
  private static getWeatherConditionWithTrend(prevCondition: string): string {
    const conditions = [
      "Clear", "Partly Cloudy", "Cloudy", "Light Rain", 
      "Moderate Rain", "Heavy Rain", "Thunderstorm", "Fog"
    ]
    
    // Weather tends to stay similar from day to day with gradual changes
    // Define condition groups for realistic transitions
    const clearGroup = ["Clear", "Partly Cloudy"]
    const cloudyGroup = ["Partly Cloudy", "Cloudy", "Fog"]
    const lightRainGroup = ["Cloudy", "Light Rain", "Moderate Rain"]
    const heavyRainGroup = ["Moderate Rain", "Heavy Rain", "Thunderstorm"]
    
    let possibleConditions: string[] = []
    
    // 60% chance to stay in the same weather pattern group
    if (Math.random() < 0.6) {
      if (clearGroup.includes(prevCondition)) {
        possibleConditions = clearGroup
      } else if (cloudyGroup.includes(prevCondition)) {
        possibleConditions = cloudyGroup
      } else if (lightRainGroup.includes(prevCondition)) {
        possibleConditions = lightRainGroup
      } else if (heavyRainGroup.includes(prevCondition)) {
        possibleConditions = heavyRainGroup
      }
    } else {
      // 40% chance to transition to adjacent weather pattern
      if (prevCondition === "Clear") {
        possibleConditions = ["Clear", "Partly Cloudy", "Cloudy"]
      } else if (prevCondition === "Partly Cloudy") {
        possibleConditions = ["Clear", "Cloudy", "Light Rain"]
      } else if (prevCondition === "Cloudy") {
        possibleConditions = ["Partly Cloudy", "Light Rain", "Fog"]
      } else if (prevCondition === "Light Rain") {
        possibleConditions = ["Cloudy", "Moderate Rain"]
      } else if (prevCondition === "Moderate Rain") {
        possibleConditions = ["Light Rain", "Heavy Rain"]
      } else if (prevCondition === "Heavy Rain") {
        possibleConditions = ["Moderate Rain", "Thunderstorm"]
      } else if (prevCondition === "Thunderstorm") {
        possibleConditions = ["Heavy Rain", "Moderate Rain"]
      } else if (prevCondition === "Fog") {
        possibleConditions = ["Cloudy", "Partly Cloudy"]
      }
    }
    
    // If no valid transitions found, use all conditions
    if (possibleConditions.length === 0) {
      possibleConditions = conditions
    }
    
    return possibleConditions[Math.floor(Math.random() * possibleConditions.length)]
  }
}
