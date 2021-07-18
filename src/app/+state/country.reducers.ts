import { Action, createReducer, on } from '@ngrx/store';
import * as CovidActions from './country.actions';
import { CountryState, initialState } from './country.state';


export const COUNTRY_FEATURE_KEY = 'country';

export const countryReducer = createReducer(
  initialState,
  on(CovidActions.addCountry,
    (state: CountryState, { country }) =>
    ({
      ...state,
      countries: [...state.countries, country]
    }))
);

// export function metaReducer(reducer: any): ActionReducer<any> {
//   return function (state, action) {
//     return reducer(state, action)
//   }
// }

// export const metaReducers: MetaReducer<any>[] = [metaReducer];

export function reducers(state: CountryState | undefined, action: Action): any {
  return countryReducer(state, action);
}