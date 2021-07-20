import { Action, createReducer, on } from '@ngrx/store';
import * as CovidActions from './country.actions';
import { CountryState, initialState } from './country.state';


export const COUNTRY_FEATURE_KEY = 'CovidCountry';

export const countryReducer = createReducer(
  initialState,
  on(CovidActions.addFavoriteCountry,
    (state: CountryState, { country }) =>
    ({
      ...state,
      favoritesCountries: [...state.favoritesCountries, country]
    })),
  on(CovidActions.setFormProperties,
    (state: CountryState, { formProperties }) =>
    ({
      ...state,
      formProperties: formProperties
    }))
);

export function reducers(state: CountryState | undefined, action: Action): any {
  return countryReducer(state, action);
}