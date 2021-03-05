import {Component, OnInit} from '@angular/core';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {UserService} from '../auth/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MeineDatenService} from './meine-daten.service';

@Component({
  selector: 'app-meine-daten',
  templateUrl: './meine-daten.component.html',
  styleUrls: ['./meine-daten.component.css']
})
export class MeineDatenComponent implements OnInit {
  id: string;
  schueler: StudentData;
  schulerDatenBearbeitenFormGroup: FormGroup;

  constructor(private schuelerData: SchuelerDataService,
              private userService: UserService,
              private meinedatenService: MeineDatenService) {
  }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;

      if (id) {
        this.schuelerData.findSchueler(id).subscribe(foundSchueler => {
          if (!foundSchueler) {
            console.log('WIESO?')
          } else {
            this.schueler = foundSchueler;
            this.schulerDatenBearbeitenFormGroup = this.getUpdatedFormGroup(foundSchueler);
          }
        });
      }
    });

    this.schulerDatenBearbeitenFormGroup = this.getUpdatedFormGroup();
  }

  getUpdatedFormGroup(schueler?: StudentData): FormGroup {
    return new FormGroup({
      'vorname': new FormControl(schueler?.vorname),
      'nachname': new FormControl(schueler?.nachname),
      'geburtsdatum': new FormControl(schueler?.geburtsdatum),
      'strasse': new FormControl(schueler?.strasse),
      'hausnummer': new FormControl(schueler?.hausnummer),
      'email': new FormControl(schueler?.email),
      'telefon': new FormControl(schueler?.telefon),
      'stadt': new FormControl(schueler?.stadt),
      'plz': new FormControl(schueler?.plz)
    });
  }

  onSubmit() {
    const updateschuelerEins = {
      id: this.id,
      vorname: this.schulerDatenBearbeitenFormGroup.controls.vorname.value,
      nachname: this.schulerDatenBearbeitenFormGroup.controls.nachname.value,
      geburtsdatum: this.schulerDatenBearbeitenFormGroup.controls.geburtsdatum.value,
      strasse: this.schulerDatenBearbeitenFormGroup.controls.strasse.value,
      hausnummer: this.schulerDatenBearbeitenFormGroup.controls.hausnummer.value,
      telefon: this.schulerDatenBearbeitenFormGroup.controls.telefon.value,
      stadt: this.schulerDatenBearbeitenFormGroup.controls.stadt.value,
      plz: this.schulerDatenBearbeitenFormGroup.controls.plz.value,
      email: this.schulerDatenBearbeitenFormGroup.controls.email.value,
    };
    this.meinedatenService.updateSchueler(updateschuelerEins).subscribe(data => {
      console.log('data: ', data)
      console.log('Updateschuelereins: ', updateschuelerEins)
    });
  }
}
