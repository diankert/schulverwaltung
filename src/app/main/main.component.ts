import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  show = true;

  giveDate = new Date();

  ngOnInit(): void {
  }

  constructor() {
  }

}
