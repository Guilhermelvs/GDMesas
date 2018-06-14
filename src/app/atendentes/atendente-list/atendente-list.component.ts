import { Component, OnInit } from '@angular/core';
import { atendentesService } from '../shared/atendente.service';
import { Atendentes } from '../shared/atendente.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atendente-list',
  templateUrl: './atendente-list.component.html',
  styleUrls: ['./atendente-list.component.css']
})
export class AtendenteListComponent implements OnInit {
  atendenteList: Atendentes[];
  constructor(private atendentesService: atendentesService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.atendentesService.getData();
    x.snapshotChanges().subscribe(item => {
      this.atendenteList = [];
      item.forEach(element => {
        console.log("element");
        console.log(element);
        //var y = element.payload.toJSON();
      //  y["$id_atendente"] = element.key;
       // this.atendenteList.push(y as Atendentes);
      });
    });
  }

  onEdit(emp: Atendentes) {
    this.atendentesService.selectedatendentes = Object.assign({}, emp);
  }

  onDelete(id_atendente: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.atendentesService.deleteatendentes(id_atendente);
      this.tostr.warning("Deletado com Sucesso", "Employee register");
    }
  }

}