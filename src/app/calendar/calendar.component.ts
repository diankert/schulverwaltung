import { Component, OnInit } from '@angular/core';

export class MonthData {
  weeks: DateWrapper[][] = [];

  addWeek(week: DateWrapper[]) {
    this.weeks.push(week);
  }
}

export class DateWrapper {
  constructor(public date: Date, public isWeekend: boolean, public isDisabled: boolean) {
  }
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthData: MonthData;
  daysOfTheWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  currentDate: Date;

  constructor() { }

  ngOnInit(): void {
    const currentDate = new Date();
    const allDatesToShow: DateWrapper[] = [];

    // "Leertage" aus Vormonat berechnen
    let daysToInsertLastMonth = this.calculateDaysToInsertLastMonth(currentDate);

    // "Leertage" aus Vormonat einfügen
    this.insertDaysFromLastMonth(daysToInsertLastMonth, currentDate, allDatesToShow);

    // Tage einfügen
    this.insertDaysFromCurrentMonth(daysToInsertLastMonth, currentDate, allDatesToShow);

    // "Leertage" aus Nachfolgemonat berechnen
    const daysToInsertNextMonth = this.calculateDaysToInsertNextMonth(allDatesToShow[allDatesToShow.length-1]);

    // "Leertage" aus Nachfolgemonat einfügen
    this.insertDaysFromNextMonth(daysToInsertNextMonth, currentDate, allDatesToShow);

    // MonthData aus den Tages zusammenbauen
    this.monthData = new MonthData();
    while (allDatesToShow.length) {
      this.monthData.addWeek(allDatesToShow.splice(0, 7))
    }

    this.currentDate = currentDate;
  }

  private getNumberOfDaysForMonth(currentDate: Date): number {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  }

  private calculateDaysToInsertLastMonth(currentDate: Date): number {
    let daysToInsert = 0;
    while(daysToInsert < currentDate.getDay()) {
      daysToInsert++;
    }
    return daysToInsert;
  }

  private insertDaysFromLastMonth(numberOfDaysToInsert: number, currentDate: Date, dataToInsertInto: DateWrapper[]): void {
    const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const numberOfDaysInLastMonth = this.getNumberOfDaysForMonth(firstDayOfLastMonth)
    for (let i = 0; i < numberOfDaysToInsert; i++) {
      const dateToInsert = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, numberOfDaysInLastMonth - numberOfDaysToInsert + i + 1);
      dataToInsertInto[i] = new DateWrapper(dateToInsert, this.isWeekend(dateToInsert), true);
    }
  }

  private insertDaysFromCurrentMonth(daysToInsertFromLastMonth: number, currentDate: Date, dataToInsertInto: DateWrapper[]): void {
    const numberOfDaysInCurrentMonth = this.getNumberOfDaysForMonth(currentDate);
    for (let i = 0 + daysToInsertFromLastMonth; i < numberOfDaysInCurrentMonth + daysToInsertFromLastMonth; i++) {
      const dateToInsert = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1 - daysToInsertFromLastMonth);
      dataToInsertInto[i] = new DateWrapper(dateToInsert, this.isWeekend(dateToInsert), false);
    }
  }

  private calculateDaysToInsertNextMonth(lastDayOfCurrentMonth: DateWrapper): number {
    const numberOfDaysToInsert = 7 - lastDayOfCurrentMonth.date.getDay();
    return numberOfDaysToInsert;
  }

  private insertDaysFromNextMonth(daysToInsertFromNextMonth: number, currentDate: Date, dataToInsertInto: DateWrapper[]): void {
    for (let i = 0; i < daysToInsertFromNextMonth; i++) {
      const dateToInsert = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i + 1);
      dataToInsertInto.push(new DateWrapper(dateToInsert, this.isWeekend(dateToInsert), true));
    }
  }

  private isWeekend(newDay: Date) {
    return newDay.getDay() === 6 || newDay.getDay() === 0;
  }

  onPreviousMonth(): void {

  }

  onNextMonth(): void {

  }



}
