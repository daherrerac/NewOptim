import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeloCliente } from '../models/modelocliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NClienteService {
  // myAppUrl = 'https://addfieldback.azurewebsites.net';
  myAppUrl = 'https://localhost:44399';
  myApiUrl = '/api/Usuarios/';

  list: ModeloCliente[];

  constructor(private http: HttpClient) { }

  guardarUsuario(usuario: ModeloCliente): Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(this.myAppUrl + this.myApiUrl, usuario);
  }
  // tslint:disable-next-line: typedef
  obtenerCliente(){
    console.log(this.myAppUrl + this.myApiUrl);
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
                  .then(data => {
                    this.list = data as ModeloCliente[];
                  });
  }
}
