import { Injectable } from '@angular/core';
import {MonthData} from './month-data.class';
import {DateWrapper} from './date-wrapper.class';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private lastMonthData: MonthData;

  constructor() { }

  createMonthData(currentDate: Date): MonthData {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const allDatesToShow: DateWrapper[] = [];

    // "Leertage" aus Vormonat berechnen
    let daysToInsertLastMonth = this.calculateDaysToInsertLastMonth(date);

    // "Leertage" aus Vormonat einfügen
    this.insertDaysFromLastMonth(daysToInsertLastMonth, date, allDatesToShow);

    // Tage einfügen
    this.insertDaysFromCurrentMonth(daysToInsertLastMonth, date, allDatesToShow);

    // "Leertage" aus Nachfolgemonat berechnen
    const daysToInsertNextMonth = this.calculateDaysToInsertNextMonth(allDatesToShow[allDatesToShow.length-1]);

    // "Leertage" aus Nachfolgemonat einfügen
    this.insertDaysFromNextMonth(daysToInsertNextMonth, date, allDatesToShow);

    // MonthData aus den Tages zusammenbauen
    const monthData = new MonthData();
    monthData.currentDate = date;
    while (allDatesToShow.length) {
      monthData.addWeek(allDatesToShow.splice(0, 7))
    }

    this.lastMonthData = monthData;

    return monthData;
  }

  private getNumberOfDaysForMonth(currentDate: Date): number {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  }

  private calculateDaysToInsertLastMonth(currentDate: Date): number {
    let daysToInsert = 0;
    while(daysToInsert < currentDate.getDay() - 1) {
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
    return numberOfDaysToInsert < 7 ? numberOfDaysToInsert : 0;
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

  goOneMonthBack(): MonthData {
    const lastMonthDataCurrentDate = this.lastMonthData?.currentDate;
    const firstDayOfLastMonth = new Date(lastMonthDataCurrentDate?.getFullYear(), lastMonthDataCurrentDate?.getMonth() - 1, 1);
    return this.createMonthData(firstDayOfLastMonth);
  }

  goOneMonthForward(): MonthData {
    const lastMonthDataCurrentDate = this.lastMonthData?.currentDate;
    const firstDayOfNextMonth = new Date(lastMonthDataCurrentDate?.getFullYear(), lastMonthDataCurrentDate?.getMonth() + 1, 1);
    return this.createMonthData(firstDayOfNextMonth);
  }
}
