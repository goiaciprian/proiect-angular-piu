import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {StoredCity} from "../../dtos/stored-city.dto";
import {WeatherService} from "../../services/weather.service";
import {WeatherDto} from "../../dtos/weather.dto";
import {StoreService} from "../../services/store.service";
import {MatDialog} from "@angular/material/dialog";
import {CityDialogComponent} from "../citydialog/city-dialog.component";

@Component({
  selector: 'weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  private _city!: StoredCity;
  weather!: WeatherDto;

  selector='div.options'

  loading = false;

  private timeout?: any;

  public constructor(
    private readonly weatherService: WeatherService,
    private readonly storeService: StoreService,
    private readonly dialog: MatDialog,
  ) {}

  @Input()
  set city(city: StoredCity) {
    this._city = city;
    this.weatherService.getLocationWeather(city.city).subscribe(weather => this.weather = weather);
  }

  get city() {
    return this._city;
  }

  ngOnInit() {
    this.weatherService.getLocationWeather(this.city.city).subscribe((weather) => {
      this.weather = weather
    });
  }

  deleteCity(id: string) {
    this.storeService.deleteCity(id);
  }

  refresh(name: string) {
    this.weatherService.getLocationWeather(name).subscribe(weather => this.weather = weather);
    this.loading = true;
    this.timeout = setTimeout(() =>  {
      this.loading = false;
      clearTimeout(this.timeout)
    }, 1000);
  }

  openEditDialog() {
    this.dialog.open(CityDialogComponent, {
      data: this.city,
    }).afterClosed().subscribe((value) => {
      if(value === 'update') {
        this.weatherService.getLocationWeather(this._city.city).subscribe(weather => this.weather = weather);
      }
    })
  }


}
