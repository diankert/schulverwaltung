import { Component, OnInit } from '@angular/core';
import {CalendarService} from './calendar.service';
import {MonthData} from './month-data.class';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonthToDisplay: MonthData;
  daysOfTheWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  cardHide: boolean = true;
  constructor(private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    const day = new Date().getDay();
    this.currentMonthToDisplay = this.calendarService.createMonthData(new Date());
  }

  onPreviousMonth(): void {
    this.currentMonthToDisplay = this.calendarService.goOneMonthBack();
  }

  onNextMonth(): void {
    this.currentMonthToDisplay = this.calendarService.goOneMonthForward();
  }

  hideCard() {
    this.cardHide = false;
  }
}
