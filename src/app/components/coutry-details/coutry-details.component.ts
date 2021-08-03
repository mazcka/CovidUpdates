import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Country, CountryMetadata } from 'src/app/models/country';
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
  countryName: string = '';
  countryDetails: Country | null;
  countryMetadata: CountryMetadata | null;

  subscriptions: Subscription[] = [];
  minDate: Date | null = null;
  maxDate: Date | null = null;

  constructor(private countryService: CountryService,
    private countryFacade: CountryFacade,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute) {

    this.countryDetails = null;
    this.countryMetadata = null;

    this.minDate = new Date(2020, 0, 1);
    this.maxDate = new Date(Date.now());
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const countryNameFromRoute = routeParams.get('countryName');
    this.countryName = countryNameFromRoute ? countryNameFromRoute : '';

    this.subscriptions.push(
      this.countryFacade.getCountryMeatadataById(this.countryName)
        .subscribe(res => this.countryMetadata = res ? res : null)
    );
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const date = this.selectedDate && this.selectedDate.value ?
      this.datePipe.transform(this.selectedDate.value, 'yyyy-MM-dd') :
      null;
    if (date) {
      this.getDailyReportByCountryCode(this.countryName, date);
    } else {
      this.countryDetails = null;
    }
  }

  getDailyReportByCountryCode(countryName: string, date: string): void {
    this.countryService.getCountryDataByDate(countryName, date)
      .pipe(take(1))
      .subscribe(res => {
        this.countryDetails = res.response[0];
      })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}