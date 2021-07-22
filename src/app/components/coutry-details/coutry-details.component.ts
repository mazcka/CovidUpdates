import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { filter, take, takeUntil } from 'rxjs/operators';
import { CountryMetadata, CountryReport } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';
import { DatePipe } from '@angular/common';
import { CountryFacade } from 'src/app/+state/country.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coutry-details',
  templateUrl: './coutry-details.component.html',
  styleUrls: ['./coutry-details.component.scss']
})
export class CoutryDetailsComponent implements OnInit, OnDestroy {

  selectedDate = new FormControl(new Date());
  countryCode: string = '';
  countryDetails: CountryReport | null;
  countryMetadata: CountryMetadata | null;

  subscriptions: Subscription[] = [];

  constructor(private countryService: CountryService,
    private countryFacade: CountryFacade,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute) {
    this.countryDetails = null;
    this.countryMetadata = null;
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const countryCodeFromRoute = routeParams.get('countryCode');
    this.countryCode = countryCodeFromRoute ? countryCodeFromRoute : '';

    this.subscriptions.push(
      this.countryFacade.getCountryMeatadataById(this.countryCode)
        .subscribe(res => this.countryMetadata = res ? res : null)
    );
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const date = this.selectedDate && this.selectedDate.value ?
      this.datePipe.transform(this.selectedDate.value, 'yyyy-MM-dd') :
      null;
    if (date) {
      this.getDailyReportByCountryCode(this.countryCode, date);
    } else {
      this.countryDetails = null;
    }
  }

  getDailyReportByCountryCode(countryCode: string, date: string): void {
    this.countryService.getDailyReportByCountryCode(countryCode, date)
      .pipe(take(1))
      .subscribe(res => {
        if (res[0].provinces && res[0].provinces.length && res[0].provinces[0]['active']) {
          this.countryDetails = res[0];
        }
      })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}