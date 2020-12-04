import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PozoService } from '../../../services/pozo.service';
import { Pozo } from '../../../models/pozo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-pozo',
  templateUrl: './crear-pozo.component.html',
  styleUrls: ['./crear-pozo.component.css']
})
export class CrearPozoComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private pozoService: PozoService,
              private toastr: ToastrService ) {
    this.form = this.formBuilder.group({
      id: 0,
      company: ['', [Validators.required]],
      field: ['', [Validators.required]],
      well: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  guardarPozo(){
    const pozo: Pozo = {
      company: this.form.get('company').value,
      field: this.form.get('field').value,
      well: this.form.get('well').value
    };
    this.pozoService.guardarPozo(pozo).subscribe(data => {
      this.toastr.success('Pozo Agregado', 'El pozo fue agregado Correctamente');
      console.log('Guardado Exitosamente');
      this.pozoService.obtenerPozo();
      this.form.reset();
    });
  }
}
