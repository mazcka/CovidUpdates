import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CoutryDetailsComponent } from './components/coutry-details/coutry-details.component';

const routes: Routes = [
  { path: 'home', component: CountriesListComponent },
  { path: 'details/:countryName', component: CoutryDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
