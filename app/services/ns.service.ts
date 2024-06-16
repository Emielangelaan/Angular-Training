import { Injectable } from '@angular/core';
import { Station } from '../models/station';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { VertrektijdInfo } from '../models/vertrektijd-info';

@Injectable({
  providedIn: 'root'
})
export class NsService {

  constructor(private http: HttpClient) { }

url = 'https://xanderwemmers.nl/api/ns/';

  getStations() {
    return this.http.get<Station[]>(this.url)
    .pipe(map(data => data.sort((a,b) => a.Name.localeCompare(b.Name))));
  }

  getVertrektijdInfo(code: string) {
    return this.http.get<VertrektijdInfo[]>(this.url + code)
  }
}
