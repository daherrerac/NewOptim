import { Component, OnInit } from '@angular/core';
import { PozoService } from '../../../services/pozo.service';

@Component({
  selector: 'app-listar-pozo',
  templateUrl: './listar-pozo.component.html',
  styleUrls: ['./listar-pozo.component.css']
})
export class ListarPozoComponent implements OnInit {

  constructor(public pozoService: PozoService) { }

  ngOnInit(): void {
    this.pozoService.obtenerPozo();
  }
}
