import {WeatherDto} from "../dtos/weather.dto";

export const mockdata: WeatherDto = {
  "location": {
    "name": "Focsani",
    "region": "Vrancea",
    "country": "Romania",
    "lat": 45.7,
    "lon": 27.18,
    "tz_id": "Europe/Bucharest",
    "localtime_epoch": 1673626037,
    "localtime": "2023-01-13 18:07"
  },
  "current": {
    "last_updated_epoch": 1673625600,
    "last_updated": "2023-01-13 18:00",
    "temp_c": 4.8,
    "temp_f": 40.6,
    "is_day": 0,
    "condition": {
      "text": "Overcast",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
      "code": 1009
    },
    "wind_mph": 6.0,
    "wind_kph": 9.7,
    "wind_degree": 168,
    "wind_dir": "SSE",
    "pressure_mb": 1021.0,
    "pressure_in": 30.16,
    "precip_mm": 0.0,
    "precip_in": 0.0,
    "humidity": 90,
    "cloud": 100,
    "feelslike_c": 2.5,
    "feelslike_f": 36.5,
    "vis_km": 10.0,
    "vis_miles": 6.0,
    "uv": 1.0,
    "gust_mph": 8.1,
    "gust_kph": 13.0
  }
}
