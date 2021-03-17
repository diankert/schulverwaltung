import {Injectable} from '@angular/core';
import {TeilnehmerData} from '../services/teilnehmer-data.service';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../auth/user.service';
import {filter, map, tap} from 'rxjs/operators';

export interface Wochenbericht {
  id?: string;
  creation_date?: Date;
  last_modification_date?: Date;
  deleted?: Date;
  deletion_date?: Date;
  teilnehmer_id?: string;
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
  datum: string;
  thema: string;
  wb_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class WochenberichtVorlageService {
  private teilnehmer_id: string;


  constructor(private http: HttpClient,
              private userService: UserService) {
    this.userService.idChanged.subscribe(id => {
      this.teilnehmer_id = id;
    })

  }

  getAllWochenberichteVonUser(id: string): Observable<Wochenbericht[]> {
    return this.http
      .get<TeilnehmerData>('api/teilnehmer/get/?id=' + id + '&showrelated=true')
      .pipe(map(studentData => studentData.wochenberichte))
  }

  getWochenberichtMitId(id: string): Observable<Wochenbericht> {
    return this.http.get<Wochenbericht>('api/wochenbericht/get/?id=' + id + '&showrelated=true')
  }


  addWochenbericht(): Observable<Wochenbericht> {
    console.log('idpups: ', this.teilnehmer_id)
    return this.http.post<Wochenbericht>('/api/wochenbericht/create', {
      'teilnehmer_id': this.teilnehmer_id
    })
  }

// {"id":"1", "zeilennummer":"1", "inhalt":"ganz viel Inhalt", "wb_tag_id":"1"}
  updateInhalt(inhalt: Inhalt): Observable<Inhalt> {
    return this.http.put<Inhalt>('/api/wochenberichts_inhalt/update', inhalt)
  }


  addTag(neuenTagAnlegen: Tag): Observable<Tag> {

    return this.http.post<Tag>('/api/wochenberichts_tag/create', neuenTagAnlegen);
  }

  getTageFuerWochenbericht(id: string): Observable<Tag[]> {
    return this.http.get<Tag[]>('/api/wochenberichts_tag/list').pipe(map(tage => tage.filter(tag => tag.wb_id === id)));

  }

  addInhalt(neuenInhaltAnlegen: Inhalt): Observable<Inhalt> {
    return this.http.post<Inhalt>(' /api/wochenberichts_inhalt/create', neuenInhaltAnlegen)
  }

  getInhaltFuerTag(id: string): Observable<Inhalt[]> {
    return this.http.get<Inhalt[]>('/api/wochenberichts_inhalt/list').pipe(map(tage => tage.filter(tag => tag.wb_tag_id === id)));
  }

  getInhalt(id: string): Observable<Inhalt[]> {
    return this.http.get<Inhalt[]>('/api/wochenberichts_inhalt/get?id=' + id);
  }

  deleteWochenbericht(id:string){
    return this.http.delete<Wochenbericht>(' /api/wochenbericht/delete?id='+ id)
  }

  deleteTag(id:string){
    return this.http.delete<Wochenbericht>('/api/wochenberichts_tag/delete?id='+ id)
  }
}

