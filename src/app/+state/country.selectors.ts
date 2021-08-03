import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from '../models/country';
import * as fromReducer from './country.reducers';
import { CountryState } from './country.state';
import { filter, orderBy, take } from 'lodash';

export const selectCountryState = createFeatureSelector<CountryState>(
    fromReducer.COUNTRY_FEATURE_KEY
);

export const getCurrentCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.currentCountries
);

export const getPopularCountries = createSelector(
    selectCountryState,
    getCurrentCountries,
    (state: CountryState) => state.popularCountries
);

export const getFormProperties = createSelector(
    selectCountryState,
    (state: CountryState) => state.formProperties
);

export const getCountriesMeatadata = createSelector(
    selectCountryState,
    (state: CountryState) => state.countriesList
);

export const getCountryMeatadataById = (name: string) => createSelector(
    selectCountryState,
    getCountriesMeatadata,
    (state: CountryState) => state.countriesList.find(c => c.name == name)
);

export const getFavoritesCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.favoritesCountries
);

export const getFavoritesCountryById = (favoriteCountry: Country) => createSelector(
    getFavoritesCountries,
    (favoritesCountries) => favoritesCountries.find(c => c.country == favoriteCountry.country)
);