import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from '../models/country';
import * as fromReducer from './country.reducers';
import { CountryState } from './country.state';

export const selectCountryState = createFeatureSelector<CountryState>(
    fromReducer.COUNTRY_FEATURE_KEY
);

export const getCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.countries
);

export const getFormProperties = createSelector(
    selectCountryState,
    (state: CountryState) => state.formProperties
);

export const getCountriesMeatadata = createSelector(
    selectCountryState,
    (state: CountryState) => state.countriesList
);

export const getCountryMeatadataById = (alpha2code: string) => createSelector(
    selectCountryState,
    getCountriesMeatadata,
    (state: CountryState) => state.countriesList.find(c => c.alpha2code == alpha2code)
);

export const getFavoritesCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.favoritesCountries
);

export const getFavoritesCountryById = (favoriteCountry: Country) => createSelector(
    getFavoritesCountries,
    (favoritesCountries) => favoritesCountries.find(c => c.code == favoriteCountry.code)
);