import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getCountries } from './country.selectors';
import { CountryState } from './country.state';

@Injectable()
export class CountryFacade {
    countries$ = this.store.pipe(select(getCountries));

    constructor(private store: Store<CountryState>) {
        // 
    }
}