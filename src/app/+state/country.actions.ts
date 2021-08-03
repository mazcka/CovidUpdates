import { createAction } from '@ngrx/store';
import { Country, CountryMetadata } from '../models/country';
import { FormProperties } from '../models/form.properties';

export const addFavoriteCountry = createAction(
    '[Country] Add Favorite Country',
    (country: Country) => ({ country })
);

export const setPopularCountries = createAction(
    '[Country] Set Popular Countries',
    (countries: Country[]) => ({ countries })
);

export const setCurrentCountries = createAction(
    '[Country] Set Current Countries',
    (countries: Country[]) => ({ countries })
);

export const setCountriesMatadata = createAction(
    '[Country] Set Countries Matadata',
    (countriesList: CountryMetadata[]) => ({ countriesList })
);

export const setFormProperties = createAction(
    '[Country] Set Form Properties',
    (formProperties: FormProperties) => ({ formProperties })
);