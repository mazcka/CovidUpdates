import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Country, CountryMetadata } from '../models/country';
import * as CovidActions from './country.actions';
import { getCountries, getCountriesMeatadata, getCountryMeatadataById, getFavoritesCountries, getFavoritesCountryById, getFormProperties } from './country.selectors';
import { CountryState } from './country.state';
import { take } from 'rxjs/operators';
import { FormProperties } from '../models/form.properties';
import { Observable } from 'rxjs';

@Injectable()
export class CountryFacade {
    countries$ = this.store.pipe(select(getCountries));
    formProperties$ = this.store.pipe(select(getFormProperties));
    favoritesCountries$ = this.store.pipe(select(getFavoritesCountries));
    getCountriesMeatadata$ = this.store.pipe(select(getCountriesMeatadata));

    constructor(private store: Store<CountryState>) {
        // 
    }

    addCountryToFavorites(country: Country): void {
        this.store.pipe(select(getFavoritesCountryById(country)))
            .pipe(take(1))
            .subscribe(res => {
                if (!res) {
                    this.store.dispatch(CovidActions.addFavoriteCountry(country));
                }
            });
    }

    getCountryMeatadataById(alpha2code: string): Observable<CountryMetadata | undefined> {
        return this.store.pipe(select(getCountryMeatadataById(alpha2code)));
    }

    setFormProperties(formProperties: FormProperties): void {
        this.store.dispatch(CovidActions.setFormProperties(formProperties));
    }
}
