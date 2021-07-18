import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './country.reducers';
import { CountryState } from './country.state';

export const selectCountryState = createFeatureSelector<CountryState>(
    fromReducer.COUNTRY_FEATURE_KEY
);

export const getCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.countries
);

// export const loadCountries = createSelector(
//     selectCountryState,
//     (state: CountryState) => state.countries
// );