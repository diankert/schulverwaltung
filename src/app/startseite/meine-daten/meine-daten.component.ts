import {Component, OnInit} from '@angular/core';
import {TeilnehmerData, TeilnehmerDataService} from '../../services/teilnehmer-data.service';
import {UserService} from '../../auth/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-meine-daten',
  templateUrl: './meine-daten.component.html',
  styleUrls: ['./meine-daten.component.css']
})
export class MeineDatenComponent implements OnInit {
  id: string;
  teilnehmer: TeilnehmerData;
  teilnehmerDatenBearbeitenFormGroup: FormGroup;

  constructor(private teilnehmerDataService: TeilnehmerDataService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;

      if(this.userService.type == 'dozent') {
        if (id) {
          this.teilnehmerDataService.findDozent(id).subscribe(foundTeilnehmer => {
            if (!foundTeilnehmer) {
              console.log('Dozent NICHT GEFUNDEN ', foundTeilnehmer)
            } else {
              this.teilnehmer = foundTeilnehmer;
              this.teilnehmerDatenBearbeitenFormGroup = this.getUpdatedFormGroup(foundTeilnehmer);
            }
          });
        }
      }
      if(this.userService.type == 'teilnehmer') {
        if (id) {
          this.teilnehmerDataService.findTeilnehmer(id).subscribe(foundTeilnehmer => {
            if (!foundTeilnehmer) {
              console.log('teilnehmer NICHT GEFUNDEN ', foundTeilnehmer)
            } else {
              this.teilnehmer = foundTeilnehmer;
              this.teilnehmerDatenBearbeitenFormGroup = this.getUpdatedFormGroup(foundTeilnehmer);
            }
          });
        }
      }
      if(this.userService.type == 'verwaltungsmitarbeiter') {
        if (id) {
          this.teilnehmerDataService.findVerwaltungs(id).subscribe(foundTeilnehmer => {
            if (!foundTeilnehmer) {
              console.log('teilnehmer NICHT GEFUNDEN ', foundTeilnehmer)
            } else {
              this.teilnehmer = foundTeilnehmer;
              this.teilnehmerDatenBearbeitenFormGroup = this.getUpdatedFormGroup(foundTeilnehmer);
            }
          });
        }
      }
    });

    this.teilnehmerDatenBearbeitenFormGroup = this.getUpdatedFormGroup();
  }


  getUpdatedFormGroup(teilnehmer?: TeilnehmerData): FormGroup {
    return new FormGroup({
      'vorname': new FormControl(teilnehmer?.vorname),
      'nachname': new FormControl(teilnehmer?.nachname),
      'geburtsdatum': new FormControl(teilnehmer?.geburtsdatum),
      'strasse': new FormControl(teilnehmer?.strasse),
      'hausnummer': new FormControl(teilnehmer?.hausnummer),
      'email': new FormControl(teilnehmer?.email),
      'telefon': new FormControl(teilnehmer?.telefon),
      'stadt': new FormControl(teilnehmer?.stadt),
      'plz': new FormControl(teilnehmer?.plz)
    });
  }


  onSubmit() {
    const teilnehmerToUpdate = {
      id: this.id,
      vorname: this.teilnehmerDatenBearbeitenFormGroup.controls.vorname.value,
      nachname: this.teilnehmerDatenBearbeitenFormGroup.controls.nachname.value,
      geburtsdatum: this.teilnehmerDatenBearbeitenFormGroup.controls.geburtsdatum.value,
      strasse: this.teilnehmerDatenBearbeitenFormGroup.controls.strasse.value,
      hausnummer: this.teilnehmerDatenBearbeitenFormGroup.controls.hausnummer.value,
      telefon: this.teilnehmerDatenBearbeitenFormGroup.controls.telefon.value,
      stadt: this.teilnehmerDatenBearbeitenFormGroup.controls.stadt.value,
      plz: this.teilnehmerDatenBearbeitenFormGroup.controls.plz.value,
      email: this.teilnehmerDatenBearbeitenFormGroup.controls.email.value,
    };
    if(this.userService.type == 'teilnehmer') {
      this.teilnehmerDataService.updateTeilnehmer(teilnehmerToUpdate).subscribe(data => {
        console.log('data: ', data)
        console.log('Updateschuelereins: ', teilnehmerToUpdate)

      });
    }
    if(this.userService.type == 'dozent') {
      this.teilnehmerDataService.updateDozent(teilnehmerToUpdate).subscribe(data => {
        console.log('data: ', data)
        console.log('Updateschuelereins: ', teilnehmerToUpdate)

      });
    }
    if(this.userService.type == 'verwaltungsmitarbeiter') {
      this.teilnehmerDataService.updateVerwaltungs(teilnehmerToUpdate).subscribe(data => {
        console.log('data: ', data)
        console.log('Updateschuelereins: ', teilnehmerToUpdate)

      });
    }
  }
}
