import { Component, OnInit } from '@angular/core';
import { MesaService } from './shared/mesa.service'

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css'],
  providers :[MesaService]
})
export class MesasComponent implements OnInit {

  constructor(private MesaService : MesaService) { }

  ngOnInit() {
  }

}
