import {Component, OnInit} from '@angular/core';
import {SchuelerDataService, StudentsJason, StudentsLogin} from '../schueler-data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  schueler$: Observable<StudentsJason[]>;
  users$: Observable<StudentsLogin[]>
  id: string;
  schueler: StudentsJason;

  constructor(private schuelerData: SchuelerDataService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.schuelerData.findSchueler(this.id).subscribe(foundSchueler => {
      if (!foundSchueler || foundSchueler.length < 1) {
        console.log("WIESO?")
      } else {
        this.schueler = foundSchueler[0];
        console.log(this.schueler);
      }
    });


    this.users$ = this.schuelerData.findAllUsers();
    // this.schueler$ = this.schuelerData.getSchueler();
    this.schueler$ = this.schuelerData.getSchueler();
  }
}

