import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NClienteService } from '../../services/n-cliente.service';
import { ModeloCliente } from '../../models/modelocliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              // tslint:disable-next-line: no-shadowed-variable
              private NClienteService: NClienteService,
              private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      id: 0,
      useroptim: ['', [Validators.required]],
      password: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      token: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  guardarCliente(){
    const Cliente: ModeloCliente = {
      userOptim   : this.form.get('useroptim').value,
      password    : this.form.get('password').value,
      company     : this.form.get('company').value,
      email_User  : this.form.get('email').value,
      phone_User  : this.form.get('phone').value,
      address_User: this.form.get('address').value,
      city_User   : this.form.get('city').value,
      country_User: this.form.get('country').value,
      token       : this.form.get('token').value
    };
    console.log(Cliente);
    this.NClienteService.guardarUsuario(Cliente).subscribe(data => {
      this.toastr.success('Datos Agregados', 'El Usuario fue Creado Correctamente');
      this.form.reset();
    });
  }

}
