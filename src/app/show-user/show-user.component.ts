import { Component, OnInit } from '@angular/core';
import {SchuelerDataService, WetterStation} from '../schueler-data.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  schueler$: Observable<WetterStation[]>;
  constructor(private schuelerData: SchuelerDataService) {
    this.schueler$ = this.schuelerData.getSchueler();
  }

  ngOnInit(): void {
  }

}
