import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from './models/country';
import { CountryService } from './services/country.service';
import { CountryFacade } from 'src/app/+state/country.facade';
import { ButtonItem, FormProperties } from './models/form.properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  popularButtons: ButtonItem[] = [
    { title: 'Add To Favorites', callback: this.addToFavorites.bind(this) },
    { title: 'Status By Date', callback: this.getStatusByDate.bind(this) }];

  favoritesButtons: ButtonItem[] = [
    { title: 'Status By Date', callback: this.getStatusByDate.bind(this) }];

  popularFormProperties: FormProperties = {
    formId: 'popular',
    routeLink: '.',
    displayName: 'Popular',
    iconClass: 'info',
    buttons: this.popularButtons
  };

  favoritesFormProperties: FormProperties = {
    formId: 'favorites',
    routeLink: '.',
    displayName: 'Favorites',
    iconClass: 'star',
    buttons: this.favoritesButtons
  };

  navigationItems: FormProperties[] = [
    this.popularFormProperties,
    this.favoritesFormProperties];

  constructor(private countryService: CountryService,
    private route: Router,
    private countryFacade: CountryFacade) {
    this.countryFacade.setFormProperties(this.popularFormProperties);
  }

  navigateTo(item: FormProperties): void {
    switch (item.formId) {
      case 'popular':
        this.countryFacade.setCurrentCountries(this.countryFacade.popularCountries$);
        this.countryFacade.setFormProperties(this.popularFormProperties);
        break;
      case 'favorites':
        this.countryFacade.setCurrentCountries(this.countryFacade.favoritesCountries$);
        this.countryFacade.setFormProperties(this.favoritesFormProperties);
        break;
    }
    this.route.navigate([item.routeLink]);
  }

  addToFavorites(country: Country): void {
    this.countryFacade.addCountryToFavorites(country);
  }

  getStatusByDate(country: Country): void {
    this.route.navigate(['details/' + country.country]);
  }
}
