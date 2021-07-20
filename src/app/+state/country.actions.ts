import { createAction } from '@ngrx/store';
import { Country } from '../models/country';
import { FormProperties } from '../models/form.properties';

export const addFavoriteCountry = createAction(
    '[Country] Add Favorite Country',
    (country: Country) => ({ country })
);

export const loadCountries = createAction(
    '[Country] Load Countries',
    (countries: Country[]) => ({ countries })
);

export const setFormProperties = createAction(
    '[Country] Set Form Properties',
    (formProperties: FormProperties) => ({ formProperties })
);