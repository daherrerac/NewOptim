import { Component, OnInit } from '@angular/core';
import { NClienteService } from '../../../services/n-cliente.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {

  constructor(public clienteService: NClienteService) { }

  userForm: FormGroup;

  ngOnInit(): void {
    this.clienteService.obtenerCliente();
  }

}
