import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, COUNTRY_FEATURE_KEY } from './+state/country.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryFacade } from './+state/country.facade';
import { CovidCountryService } from './services/covid-country.service';
import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(COUNTRY_FEATURE_KEY, reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [CountryFacade, CovidCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
