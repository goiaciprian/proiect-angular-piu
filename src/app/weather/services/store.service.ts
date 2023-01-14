import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {StoredCity} from "../dtos/stored-city.dto";
import * as uuid from 'uuid';

@Injectable()
export class StoreService {

  private savedLocations: BehaviorSubject<StoredCity[]> = new BehaviorSubject<StoredCity[]>([{
    id: uuid.v4(),
    city: 'Brasov'
  }, {
    id: uuid.v4(),
    city: 'Focsani'
  }]);

  public get locations(): Observable<StoredCity[]> {
    return this.savedLocations.asObservable();
  }
  public saveLocation(city: string) {
    const currentList = this.savedLocations.getValue();
    const storeCity = new StoredCity({id: uuid.v4(), city});
    currentList.push(storeCity);
    this.savedLocations.next(currentList);
  }

  public updateCity(id: string, newCity: string) {
    const currentList = this.savedLocations.getValue();
    const newList = currentList.map(storedCity => {
      if(storedCity.id === id) {
        storedCity.city = newCity;
      }
      return storedCity;
    });
    this.savedLocations.next(newList);
  }

  public deleteCity(id: string) {
    const currentList = this.savedLocations.getValue();
    const index = currentList.findIndex(city => city.id === id);
    currentList.splice(index, 1);
    this.savedLocations.next(currentList);
  }
}
