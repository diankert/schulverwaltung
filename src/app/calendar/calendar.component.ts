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

  constructor() { }

  ngOnInit(): void {
    const now = new Date('2021-03-07');
    const daysInMonth = this.getNumberOfDaysForMonth(now)
    const dayData: DateWrapper[] = [];

    const lastMonthDaysInMonth = this.getNumberOfDaysForMonth(new Date(now.getFullYear(), now.getMonth() - 1, 1))

    // "Leertage" aus Vormonat berechnen
    let daysToInsertLastMonth = 0;
    while(daysToInsertLastMonth < now.getDay()) {
      daysToInsertLastMonth++;
    }

    // "Leertage" aus Vormonat einfügen
    for (let i = 0; i < daysToInsertLastMonth; i++) {
      const newDay = new Date(now.getFullYear(), now.getMonth() - 1, lastMonthDaysInMonth - daysToInsertLastMonth + i + 1);
      dayData[i] = new DateWrapper(newDay, newDay.getDay() === 6 || newDay.getDay() === 0, true);
    }

    // Tage einfügen
    for (let i = 0 + daysToInsertLastMonth; i < daysInMonth + daysToInsertLastMonth; i++) {
      const newDay = new Date(now.getFullYear(), now.getMonth(), i + 1 - daysToInsertLastMonth);
      dayData[i] = new DateWrapper(newDay, newDay.getDay() === 6 || newDay.getDay() === 0, false);
    }

    // "Leertage" aus Nachfolgemonat berechnen
    const lastDayOfThisMonth = dayData[dayData.length-1];
    const daysToInsertNextMonth = 7 - lastDayOfThisMonth.date.getDay();

    // "Leertage" aus Nachfolgemonat einfügen
    for (let i = 0; i < daysToInsertNextMonth; i++) {
      const newDay = new Date(now.getFullYear(), now.getMonth() + 1, i + 1);
      dayData.push(new DateWrapper(newDay, newDay.getDay() === 6 || newDay.getDay() === 0, true));
    }

    this.monthData = new MonthData();
    while (dayData.length) {
      this.monthData.addWeek(dayData.splice(0, 7))
    }
    console.log(this.monthData);
  }

  private getNumberOfDaysForMonth(now: Date) {
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }
}
