import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, COUNTRY_FEATURE_KEY } from './+state/country.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryFacade } from './+state/country.facade';
import { CountryService } from './services/country.service';
import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CoutryDetailsComponent } from './components/coutry-details/coutry-details.component';
import { DatePipe } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCountryService } from './mock/in-memory-country.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CoutryDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(COUNTRY_FEATURE_KEY, reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCountryService)
  ],
  providers: [
    CountryFacade,
    CountryService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
