import { Component, OnInit } from '@angular/core';
import { atendentesService } from './shared/atendente.service'

@Component({
  selector: 'app-atendentes',
  templateUrl: './atendentes.component.html',
  styleUrls: ['./atendentes.component.css'],
  providers :[atendentesService]
})
export class AtendentesComponent implements OnInit {
    constructor(private atendentesService : atendentesService) { }


  ngOnInit() {
  }

}
