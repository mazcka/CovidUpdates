import { Component, OnInit } from '@angular/core';
import { CountryFacade } from 'src/app/+state/country.facade';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries$ = this.countryFacade.currentCountries$;
  formProperties$ = this.countryFacade.formProperties$;

  searchText = '';

  constructor(private countryFacade: CountryFacade) {
  }

  ngOnInit(): void {
  }
}