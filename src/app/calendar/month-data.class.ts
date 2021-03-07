import {DateWrapper} from './date-wrapper.class';

export class MonthData {
  currentDate: Date;
  weeks: DateWrapper[][] = [];

  addWeek(week: DateWrapper[]) {
    this.weeks.push(week);
  }
}
