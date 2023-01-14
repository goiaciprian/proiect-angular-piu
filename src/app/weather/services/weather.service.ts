import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherDto} from "../dtos/weather.dto";
import {Observable, of} from "rxjs";
import {mockdata} from "./mockdata";

@Injectable()
export class WeatherService {
  public constructor (
    private readonly httpClient: HttpClient
  ) { }

  public getLocationWeather(city: string): Observable<WeatherDto> {
    return this.httpClient.get<WeatherDto>(this.buildUrl(city));
  }

  private buildUrl(city: string): string {
    return `http://api.weatherapi.com/v1/current.json?key=8aac01ba723d42f6bf7160607231301&q=${city}&aqi=no`
  }
}
