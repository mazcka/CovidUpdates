import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CountryState } from '../+state/country.state';
import { Country, CountryMetadata, CountryReport } from '../models/country';
import * as CountryActions from '../+state/country.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  requestTimer = 1500;
  rapidHeader = {
    headers: {
      "x-rapidapi-key": "ea7051fcbemsh5279dea71af4e85p17560djsn2fdc9a17bb87",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
  };

  constructor(private httpClient: HttpClient,
    private store: Store<CountryState>) {
    this.getDailyReportByCountryCode('it', '2020-04-01').subscribe(country => {
      console.log(country);
      // this.store.dispatch(CountryActions.loadCountries(country));
    });

    // Use timeout because RapidAPI doesn't support a lot of request in second
    setTimeout(() => {
      this.getLatestCountryDataByCode('it').subscribe(country => {
        console.log(country);
        // this.store.dispatch(CountryActions.loadCountries(country));
      });
    }, this.requestTimer * 1);

    setTimeout(() => {
      this.getListOfCountries().subscribe(countriesList => {
        console.log(countriesList);
        this.store.dispatch(CountryActions.setCountriesMatadata(countriesList));
      });
    }, this.requestTimer * 2);
  }

  getDailyReportByCountryCode(countryCode: string, dateQuery: string): Observable<CountryReport[]> {
    const apiUrl = `${environment.baseApiUrl}/report/country/code?code=${countryCode.toLocaleLowerCase()}&date=${dateQuery}`;
    return this.httpClient.get<CountryReport[]>(apiUrl, this.rapidHeader);
  }

  getLatestCountryDataByCode(countryCode: string): Observable<Country> {
    const apiUrl = `${environment.baseApiUrl}/country/code?code=${countryCode}`;
    return this.httpClient.get<Country>(apiUrl, this.rapidHeader);
  }

  getLatestCountryDataByName(countryName: string): Observable<Country> {
    const apiUrl = `${environment.baseApiUrl}/country?name=${countryName}`;
    return this.httpClient.get<Country>(apiUrl, this.rapidHeader);
  }

  getListOfCountries(): Observable<CountryMetadata[]> {
    const apiUrl = `${environment.baseApiUrl}/help/countries`;
    return this.httpClient.get<CountryMetadata[]>(apiUrl, this.rapidHeader);
  }
}