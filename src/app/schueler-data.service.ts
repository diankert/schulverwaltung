import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WetterStation {
  uuid: string;
  number: string;
  shortname: string;
  longname: string;
  km: number;
  agency: string;
  longitude: number;
  latitude: number;
  water: {
    shortname: string;
    longname: string;
  };

}

@Injectable({
  providedIn: 'root'
})
export class SchuelerDataService {
  // schueler = [
  //   {
  //     title: 'Schüler 1 from Service',
  //     subtitle: 'Subtitle #1',
  //   },
  //   {
  //     title: 'Schüler #2 from Service',
  //     subtitle: 'Subtitle #2',
  //   },
  //   {
  //     title: 'Schüler #3 from Service',
  //     subtitle: 'Subtitle #3',
  //   },
  //   {
  //     title: 'Schüler #4 from Service',
  //     subtitle: 'Subtitle #4',
  //   },
  // ];
  constructor(private http: HttpClient) { }

  getSchueler() {
    return this.http.get<WetterStation[]>('https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json');
  }
}
