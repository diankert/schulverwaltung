import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SchuelerDataService} from '../schueler-data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  hide = true;
  username  = '';


  constructor(private router: Router,
              private schuelerDataService: SchuelerDataService) { }

  ngOnInit(): void {
  }


  routeToHeader() {
    this.schuelerDataService.findUser(this.username).subscribe(foundUser => {
      if (!foundUser || foundUser.length < 1) {
        alert("Keinen passenden User gefunden!")
      } else {
        const user = foundUser[0];
        this.router.navigate( ['/hello', user.id] );
      }
    });
  }
}
