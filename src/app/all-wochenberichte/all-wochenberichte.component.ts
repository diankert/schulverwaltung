import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  datum: string;
  kalenderwoche: string;
  dokument: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {datum: '12.12.2020', kalenderwoche: '1', dokument: 'Wochenbericht_Polinski_1'},
  {datum: '12.12.2020', kalenderwoche: '2', dokument: 'Wochenbericht_Polinski_2'},
  {datum: '12.12.2020', kalenderwoche: '3', dokument: 'Wochenbericht_Polinski_3'},
  {datum: '12.12.2020', kalenderwoche: '4', dokument: 'Wochenbericht_Polinski_4'},
  {datum: '12.12.2020', kalenderwoche: '5', dokument: 'Wochenbericht_Polinski_5'},

];
@Component({
  selector: 'app-all-wochenberichte',
  templateUrl: './all-wochenberichte.component.html',
  styleUrls: ['./all-wochenberichte.component.css']
})
export class AllWochenberichteComponent implements OnInit {
  displayedColumns: string[] = ['datum', 'kalenderwoche', 'dokument'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
