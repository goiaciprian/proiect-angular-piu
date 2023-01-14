import {CurrentWeather} from "./current-weather.dto";
import {Location} from './location.dto';
export interface WeatherDto {
  location: Location;
  current: CurrentWeather;
}
