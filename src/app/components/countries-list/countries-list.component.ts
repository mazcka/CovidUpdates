import { Component, OnInit } from '@angular/core';
import { CountryFacade } from 'src/app/+state/country.facade';
import { Country } from 'src/app/models/country';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries$ = this.countryFacade.countries$;
  formProperties$ = this.countryFacade.formProperties$;

  searchText = '';

  constructor(private countryFacade: CountryFacade) {
  }

  ngOnInit(): void {
    //
    console.log(111);
  }

  addToFavorites(country: Country): void {
    this.countryFacade.addCountryToFavorites(country);
  }

  getStatusByDate(country: Country): void {
    // this.countryFacade.addCountryToFavorites(country);
  }
}