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
import { CountryService } from './services/country.service';
import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(COUNTRY_FEATURE_KEY, reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [CountryFacade, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
