import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../auth/user.service';
import {Wochenbericht, WochenberichtVorlageService} from './wochenbericht-vorlage.service';
import {WochenberichteVonUserService} from './wochenberichte-von-user.service';
import {Router} from '@angular/router';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DialogWochenberichtHinzugefuegt} from './wochenberichte-von-user-create/dialog-wochenbericht-hinzugefuegt/dialog-wochenbericht-hinzugefuegt';
import {DialogWochenberichtGeloscht} from './wochenberichte-von-user-create/dialog-wochenbericht-geloscht/dialog-wochenbericht-geloscht';

@Component({
  selector: 'app-wochenberichte-von-user',
  templateUrl: './wochenberichte-von-user.component.html',
  styleUrls: ['./wochenberichte-von-user.component.css']
})
export class WochenberichteVonUserComponent implements OnInit {
  wocheneberichtUser: Wochenbericht[] = []
  displayedColumns: string[] = ['id', 'deletion_date', 'teilnehmer_id'];
  selectedWochenbericht: Wochenbericht;
  pageSlice: Wochenbericht[] = [];
  wochenberichtTagAnlegenFormGroup: FormGroup
  erstellterWochenbericht: Wochenbericht;
  wochenbericht: Wochenbericht[] = [];

  constructor(private wochenberichtService: WochenberichtVorlageService,
              private userService: UserService,
              private wochenberichtVonUserService: WochenberichteVonUserService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.wochenberichtService.getAllWochenberichteVonUser(id).subscribe(wochenberichte => {
          this.wocheneberichtUser = wochenberichte;
          let i = 0;
          wochenberichte.sort((a, b) => {
            const firstCreationDate = a.creation_date;
            const secondCreationDate = b.creation_date;
            if (i == 0) {
            }
            i++;
            if (firstCreationDate < secondCreationDate) {
              return 1;
            } else if (firstCreationDate > secondCreationDate) {
              return -1;
            } else {
              return 0;
            }
          });
          this.pageSlice = wochenberichte.slice(0, 10);
        });
      }
    });
    this.wochenberichtVonUserService.selectionChanged.subscribe(selectedBericht => {
      this.selectedWochenbericht = selectedBericht;
    })
    this.wochenberichtTagAnlegenFormGroup = new FormGroup({
      "id": new FormControl(),
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.wocheneberichtUser.length) {
      endIndex = this.wocheneberichtUser.length;
    }
    this.pageSlice = this.wocheneberichtUser.slice(startIndex, endIndex);
  }


  onCreate() {
    this.router.navigate(['allewochenberichtevomuser', 'create']);
    this.wochenberichtVonUserService.selectionChanged.next(null);
  }

  onEdit() {
    this.router.navigate(['allewochenberichtevomuser', 'edit', this.selectedWochenbericht.id]);
    this.wochenberichtVonUserService.selectionChanged.next(null);
  }

  onDelete(wochenbericht: Wochenbericht) {
    this.wochenberichtService.deleteWochenbericht(wochenbericht.id).subscribe(() => {
      const newArray: Wochenbericht[] = [];
      for (const alterWochenbericht of this.wocheneberichtUser) {
        if (alterWochenbericht.id != wochenbericht.id) {
          newArray.push({...alterWochenbericht});
        }
      }
      this.wocheneberichtUser = [...newArray];
    });
    console.log('tag to delete: ', wochenbericht)
    this.openDialogGeloscht()
  }

  onSave() {

    const neuerWochenbericht = {
      id: this.wochenberichtTagAnlegenFormGroup.controls.id.value,
    };
    console.log(neuerWochenbericht)
    this.wochenberichtService.addWochenbericht().subscribe(item =>{
      this.erstellterWochenbericht = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterWochenbericht)
    });
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(DialogWochenberichtHinzugefuegt);
  }

  openDialogGeloscht() {
    this.dialog.open(DialogWochenberichtGeloscht);
  }

}
