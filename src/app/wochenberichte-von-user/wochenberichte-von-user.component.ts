import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../auth/user.service';
import {Wochenbericht, WochenberichtVorlageService} from './wochenbericht-vorlage.service';
import {WochenberichteVonUserService} from './wochenberichte-von-user.service';
import {Router} from '@angular/router';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

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

  constructor(private wochenberichtService: WochenberichtVorlageService,
              private userService: UserService,
              private wochenberichtVonUserService: WochenberichteVonUserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.wochenberichtService.getAllWochenberichteVonUser(id).subscribe(wochenberichte => {
          // console.log(wochenberichte)
          this.wocheneberichtUser = wochenberichte;
          this.pageSlice = wochenberichte.slice(0, 10);
        });
      }
    });
    this.wochenberichtVonUserService.selectionChanged.subscribe(selectedBericht => {
      this.selectedWochenbericht = selectedBericht;
    })
  }

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.wocheneberichtUser.length){
      endIndex = this.wocheneberichtUser.length;
    }
    this.pageSlice = this.wocheneberichtUser.slice(startIndex,endIndex);
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
    this.wochenberichtService.deleteWochenbericht(wochenbericht.id).subscribe(() =>{
      const newArray: Wochenbericht[] = [];
      for (const alterWochenbericht of this.wocheneberichtUser) {
        if (alterWochenbericht.id != wochenbericht.id) {
          newArray.push({...alterWochenbericht});
        }
      }
      this.wocheneberichtUser = [...newArray];
    });
    console.log('tag to delete: ', wochenbericht)
  }

}
