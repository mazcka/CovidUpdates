import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Country, CountryMetadata } from '../models/country';
import * as CovidActions from './country.actions';
import {
    getCurrentCountries,
    getCountriesMeatadata,
    getCountryMeatadataById,
    getFavoritesCountries,
    getFavoritesCountryById,
    getFormProperties,
    getPopularCountries
} from './country.selectors';
import { CountryState } from './country.state';
import { take } from 'rxjs/operators';
import { FormProperties } from '../models/form.properties';
import { Observable } from 'rxjs';

@Injectable()
export class CountryFacade {
    currentCountries$ = this.store.pipe(select(getCurrentCountries));
    popularCountries$ = this.store.pipe(select(getPopularCountries));
    favoritesCountries$ = this.store.pipe(select(getFavoritesCountries));
    formProperties$ = this.store.pipe(select(getFormProperties));
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

    getCountryMeatadataById(name: string): Observable<CountryMetadata | undefined> {
        return this.store.pipe(select(getCountryMeatadataById(name)));
    }

    setCurrentCountries(selector$: Observable<Country[]>): void {
        selector$
            .pipe(take(1))
            .subscribe(list => this.store.dispatch(CovidActions.setCurrentCountries(list)))

    }

    setFormProperties(formProperties: FormProperties): void {
        this.store.dispatch(CovidActions.setFormProperties(formProperties));
    }
}
