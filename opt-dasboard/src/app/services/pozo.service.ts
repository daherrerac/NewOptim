import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pozo } from '../models/pozo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PozoService {

  myAppUrl = 'https://addfieldback.azurewebsites.net';
 // myAppUrl = 'https://localhost:44399';
  myApiUrl = '/api/WellTB/';

  list: Pozo[];
  filter = {idUser: 8};

  constructor(private http: HttpClient) { }

  guardarPozo(pozo: Pozo): Observable<Pozo>{
    return this.http.post<Pozo>(this.myAppUrl + this.myApiUrl, pozo);
  }
  // tslint:disable-next-line: typedef
  obtenerPozo(){
    console.log(this.myAppUrl + this.myApiUrl);
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
                  .then(data => {
                    this.list = data as Pozo[];
                  });
  }
}
