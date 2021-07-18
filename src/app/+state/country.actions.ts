import { createAction } from '@ngrx/store';
import { Country } from '../models/country';

export const addCountry = createAction(
    '[Country] Add Country',
    (country: Country) => ({ country })
);

export const loadCountries = createAction(
    '[Country] Load Countries',
    (countries: Country[]) => ({ countries })
);