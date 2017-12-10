import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { IDatePickerConfig, DatePickerComponent } from 'ng2-date-picker';


@Component({
    selector: 'monthyear-picker',
  templateUrl: './monthyear.component.html',
  styleUrls: ['./monthyear.component.scss']
})

export class MonthYearComponent {
    @ViewChild('datePicker') datePicker: DatePickerComponent;
   // $picker: JQuery | any;
    date: Moment;
    displayDate: Moment | string;
    placeholder: string = 'Choose a date...';
    config: IDatePickerConfig = {
        //firstDayOfWeek: 'su',
        monthFormat: 'MMM, YYYY',
        disableKeypress: false,
        allowMultiSelect: false,
        closeOnSelect: undefined,
        closeOnSelectDelay: 100,
        openOnFocus: true,
        openOnClick: true,
        onOpenDelay: 2,
        weekDayFormat: 'ddd',
        appendTo: document.body,
        showNearMonthDays: true,
       // showWeekNumbers: false,
        enableMonthSelector: true,
        yearFormat: 'YYYY',
        showGoToCurrent: true,
        dayBtnFormat: 'DD',
        monthBtnFormat: 'MMM',
      //  multipleYearsNavigateBy: 10,
      //  showMultipleYearsNavigation: true,
        //locale: Moment.locale(),
        hideInputContainer: true
       // returnedValueType: ECalendarValue.String
      };

      validationMinDate: Moment;
      validationMaxDate: Moment;
    
    
    constructor(private el: ElementRef) {}


  
    



}