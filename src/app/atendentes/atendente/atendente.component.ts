import { Component, OnInit } from '@angular/core';
import { atendentesService } from '../shared/atendente.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Atendentes } from '../shared/atendente.model';

@Component({
  selector: 'app-atendente',
  templateUrl: './atendente.component.html',
  styleUrls: ['./atendente.component.css']
})
export class AtendenteComponent implements OnInit {
  constructor(private atendentesService: atendentesService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(atendenteForm: NgForm) {
    if (atendenteForm.value.$id_atendente == null)
      this.atendentesService.insertatendentes(atendenteForm.value);
    else
      this.atendentesService.updateatendentes(atendenteForm.value);
    this.resetForm(atendenteForm);
    this.tostr.success('Cadastro finalizado', 'Atendente Registrado');
  }

  resetForm(atendenteForm?: NgForm) {
    if (atendenteForm != null)
      atendenteForm.reset();
    this.atendentesService.selectedatendentes = {
      $id_atendente: '',
      nome_atendente: '',
      matricula_atendente: '',
    }
  }

}