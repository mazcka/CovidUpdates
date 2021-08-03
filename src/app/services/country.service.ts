import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CountryState } from '../+state/country.state';
import { Country, CountryMetadata, GeneralResponse } from '../models/country';
import * as CountryActions from '../+state/country.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { filter, orderBy, take } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  requestTimer = 1500;
  rapidHeader = {
    headers: {
      "x-rapidapi-key": "ea7051fcbemsh5279dea71af4e85p17560djsn2fdc9a17bb87",
      "x-rapidapi-host": "covid-193.p.rapidapi.com"
    }
  };

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
    return this.httpClient.get<any>(apiUrl, this.rapidHeader);
  }

  getCountryDataByDate(countryName: string, dateQuery: string): Observable<GeneralResponse<Country[]>> {
    const apiUrl = `${environment.baseApiUrl}/history?country=${countryName.toLocaleLowerCase()}&day=${dateQuery}`;
    return this.httpClient.get<any>(apiUrl, this.rapidHeader);
  }

  getListOfCountries(): Observable<GeneralResponse<CountryMetadata[]>> {
    const apiUrl = `${environment.baseApiUrl}/countries`;
    return this.httpClient.get<any>(apiUrl, this.rapidHeader);
  }
}