import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import countryDataJson from './country-data.json';
import countryListJson from './country-list.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCountryService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let countryData = countryDataJson;
    let countryList = countryListJson;

    return { countryData, countryList };
  }
}