import { Country, CountryMetadata } from '../models/country';
import { FormProperties } from '../models/form.properties';

export interface CountryState {
    currentCountries: Country[],
    popularCountries: Country[],
    favoritesCountries: Country[],
    formProperties: FormProperties | null,
    countriesList: CountryMetadata[]
}

export const initialState: CountryState = {
    currentCountries: [],
    popularCountries: [],
    favoritesCountries: [],
    formProperties: null,
    countriesList: []
};
