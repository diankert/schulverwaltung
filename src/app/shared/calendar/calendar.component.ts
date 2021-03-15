import {Component, OnInit} from '@angular/core';
import {CalendarService} from './calendar.service';
import {MonthData} from './month-data.class';
import {Kurs, Kursinhalt} from '../../kursplan/kursplan.component';
import {KursplanService} from '../../kursplan/kursplan.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonthToDisplay: MonthData;
  daysOfTheWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  cardHide: boolean = true;
  kursPlan: Kurs[] = [];
  kursInhalt: Kursinhalt[] = [];

  constructor(private calendarService: CalendarService,
              private kursplanService: KursplanService) {
  }

  ngOnInit(): void {
    const day = new Date().getDay();
    this.currentMonthToDisplay = this.calendarService.createMonthData(new Date());

    this.kursplanService.getEinKursplan()
      .subscribe(kursPlan => {
        if (!kursPlan) {
          console.error('FEHLER! ALARM!');
        } else {
          this.kursPlan = kursPlan;
        }
      });
    this.kursplanService.getKursInhalt().subscribe(kursInhalt =>{
      if(!kursInhalt){
        console.log('KEIN KURSINHALT')
      } else{
        this.kursInhalt = kursInhalt;
        console.log('Kursinhalt im calender',this.kursInhalt)
      }
    });
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
