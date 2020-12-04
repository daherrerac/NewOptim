import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pozo } from '../models/pozo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PozoService {

  myAppUrl = 'https://addfieldback.azurewebsites.net';
  myApiUrl = '/api/WellTB/';

  list: Pozo[];
  constructor(private http: HttpClient) { }

  guardarPozo(pozo: Pozo): Observable<Pozo>{
    return this.http.post<Pozo>(this.myAppUrl + this.myApiUrl, pozo);
  }
  obtenerPozo(){
    console.log(this.myAppUrl + this.myApiUrl);
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
                  .then(data => {
                    this.list = data as Pozo[];
                  });
  }
}
