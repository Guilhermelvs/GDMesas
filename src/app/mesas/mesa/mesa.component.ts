import { Component, OnInit } from '@angular/core';
import { MesaService } from '../shared/mesa.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  constructor(private MesaService: MesaService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(mesaForm: NgForm) {
    if (mesaForm.value.$key == null)
      this.MesaService.insertmesa(mesaForm.value);
    else
      this.MesaService.updatemesa(mesaForm.value);
    this.resetForm(mesaForm);
    this.tostr.success('Submitted Succcessfully', 'Mesa Registrada');
  }

  resetForm(mesaForm?: NgForm) {
    if (mesaForm != null)
      mesaForm.reset();
    this.MesaService.selectedmesa = {
      $key: null,
      local: '',
      status: '',
      cadeiras: 67,
    }
  }

}