import {Component, OnInit} from '@angular/core';
import {StoreService} from "./weather/services/store.service";
import {Observable, of} from "rxjs";
import {StoredCity} from "./weather/dtos/stored-city.dto";
import {MatDialog} from "@angular/material/dialog";
import {CityDialogComponent} from "./weather/components/citydialog/city-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Proiect Angular';
  cities$!: Observable<StoredCity[]>;

  public constructor(
    private readonly storedCityServcice: StoreService,
    private readonly matDialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.cities$ = this.storedCityServcice.locations;
  }

  openCreateDialog() {
    this.matDialog.open(CityDialogComponent, {});
  }

}
