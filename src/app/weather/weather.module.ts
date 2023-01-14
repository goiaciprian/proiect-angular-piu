import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherService} from "./services/weather.service";
import {HttpClientModule} from "@angular/common/http";
import {StoreService} from "./services/store.service";
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { IconsDirective } from './directives/icons.directive';
import { CityDialogComponent } from './components/citydialog/city-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    CardComponent,
    IconsDirective,
    CityDialogComponent
  ],
  providers: [WeatherService, StoreService],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [CardComponent, CityDialogComponent]
})
export class WeatherModule { }
