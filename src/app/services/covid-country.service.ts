import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CountryState } from '../+state/country.state';
import { Country } from '../models/country';
import * as CountryActions from '../+state/country.actions';

@Injectable({
  providedIn: 'root'
})
export class CovidCountryService {

  constructor(private store: Store<CountryState>) {
    this.getCountriesApi().subscribe(countries => this.store.dispatch(CountryActions.loadCountries(countries)));
  }

  getCountriesApi(): Observable<Country[]> {
    return of([]);
  }
}
