import {Injectable} from '@angular/core';
import {TeilnehmerData} from './teilnehmer-data.service';
import {HttpClient} from '@angular/common/http';

export interface Bild {
  id: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  name?: string;
  dateiname?: string;
  teilnehmer_id?: string;
  teilnehmer?: TeilnehmerData[];
};

@Injectable({
  providedIn: 'root'
})
export class BilderUserService{
  bildPath: string;
  constructor(private http: HttpClient) { }

  // findBild(id: string) {
  //   return this.http.get<Bild>('api/bilder/get/?id='+ id);
  // }

  bildFuerUser(id: string): string {
    switch(id) {
      case '1':
        return 'assets/bilder/bild1Frau.jpg'
      case '2':
        return 'assets/bilder/bild2Frau.jpg'
      case '3':
        return 'assets/bilder/bild3Mann.jpg'
      case '4':
        return 'assets/bilder/bild4Frau.jpg'
      case '5':
        return 'assets/bilder/bild5Frau.jpg'
      case '6':
        return 'assets/bilder/bild6Mann.jpg'
      case '7':
        return 'assets/bilder/bild7Mann.jpg'
      case '8':
        return 'assets/bilder/bild8Mann.jpg'
      case '9':
        return 'assets/bilder/bild9Frau.jpg'
      default:
        return 'https://cdn.pixabay.com/photo/2020/10/22/18/22/question-mark-5676782_1280.png';
    }
  }

}
