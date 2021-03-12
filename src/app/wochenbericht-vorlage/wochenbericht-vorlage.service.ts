import { Injectable } from '@angular/core';
import {TeilnehmerData, TeilnehmerDataService} from '../services/teilnehmer-data.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../auth/user.service';

export interface Wochenbericht {
  id?: string;
  creation_date?: Date;
  last_modification_date?: Date;
  deleted?: Date;
  deletion_date?: Date;
  teilnehmer_id: TeilnehmerData;
}

export interface Inhalt {
  id?: string;
  creation_date?: Date;
  last_modification_date?: Date;
  deleted?: Date;
  deletion_date?: Date;
  zeilennummer?: string;
  inhalt: string;
  wb_tag_id: string;
}

export interface Tag {
  id?: string;
  creation_date?: Date;
  last_modification_date?: Date;
  deleted?: Date;
  deletion_date?: Date;
  datum: Date;
  thema: string;
  wb_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class WochenberichtVorlageService {
  private teilnehmer_id: string;
  private datum:Date;
  private thema: string;
  private wochenberichtid: Wochenbericht;



  constructor(private http: HttpClient,
              private userService: UserService) {
    this.userService.idChanged.subscribe(id=>{
      this.teilnehmer_id = id;
    })
  }

  //{"teilnehmer_id":"1"}
  addWochenbericht(): Observable<Wochenbericht> {
    console.log('idpups: ', this.teilnehmer_id)
    return this.http.post<Wochenbericht>('/api/wochenbericht/create', {
      'teilnehmer_id': this.teilnehmer_id
    })
  }


  // {"datum":"2020-01-01", "thema":"mein neues thema", "wb_id":"1"}
  addTag(neuenTagAnlegen: Tag): Observable<Tag> {
    // return this.http.post<Tag>('/api/wochenberichts_tag/create', {
    //   'datum':neuenTagAnlegen.datum,
    //   'thema':neuenTagAnlegen.thema,
    //   'wb_id':neuenTagAnlegen.wb_id
    // } )
    return this.http.post<Tag>('/api/wochenberichts_tag/create', neuenTagAnlegen);
  }


  // "zeilennummer":"1", "inhalt":"ganz viel Inhalt", "wb_tag_id":"1"}
  addInhalt(neuenInhaltAnlegen: Inhalt): Observable<Inhalt> {
    return this.http.post<Inhalt>(' /api/wochenberichts_inhalt/create', neuenInhaltAnlegen)
  }
}
