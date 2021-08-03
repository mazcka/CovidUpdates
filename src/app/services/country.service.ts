import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryState } from '../+state/country.state';
import { Country, CountryMetadata, GeneralResponse } from '../models/country';
import * as CountryActions from '../+state/country.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter, orderBy, take } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpClient: HttpClient,
    private store: Store<CountryState>
  ) {
    this.getInitData();
  }

  getInitData(): void {
    this.getListOfCountries()
      .subscribe(result => {
        const countriesList = result.response;
        this.store.dispatch(CountryActions.setCountriesMatadata(countriesList));
      });

    this.getAllCountriesData()
      .subscribe(result => {
        const countriesData = this.filterCountriesResponse(result.response);
        this.store.dispatch(CountryActions.setPopularCountries(countriesData));
        this.store.dispatch(CountryActions.setCurrentCountries(countriesData));
      });
  }

  private filterCountriesResponse(countriesResponse: Country[]) {
    return take(
      orderBy(
        filter(countriesResponse, c => c.country != c.continent && c.deaths.total),
        ['deaths.total'], ['desc']),
      20) as Country[];
  }

  getAllCountriesData(): Observable<GeneralResponse<Country[]>> {
    const apiUrl = `${environment.baseApiUrl}/statistics`;
    return this.httpClient.get<any>(apiUrl);
  }

  getCountryDataByDate(countryName: string, dateQuery: string): Observable<GeneralResponse<Country[]>> {
    const apiUrl = `${environment.baseApiUrl}/history?country=${countryName.toLocaleLowerCase()}&day=${dateQuery}`;
    return this.httpClient.get<any>(apiUrl);
  }

  getListOfCountries(): Observable<GeneralResponse<CountryMetadata[]>> {
    const apiUrl = `${environment.baseApiUrl}/countries`;
    return this.httpClient.get<any>(apiUrl);
  }
}