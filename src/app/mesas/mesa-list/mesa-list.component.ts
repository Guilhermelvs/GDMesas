import { Component, OnInit } from '@angular/core';
import { MesaService } from '../shared/mesa.service';
import { Mesa } from '../shared/mesa.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mesa-list',
  templateUrl: './mesa-list.component.html',
  styleUrls: ['./mesa-list.component.css']
})
export class MesaListComponent implements OnInit {
  mesaList: Mesa[];
  constructor(private MesaService: MesaService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.MesaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.mesaList = [];
      item.forEach(element => {
       // var y = element.payload.toJSON();
       // y["$key"] = element.key;
      //this.mesaList.push(y as Mesa);
      });
    });
  }

  onEdit(emp: Mesa) {
    this.MesaService.selectedmesa = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.MesaService.deletemesa(key);
      this.tostr.warning("Deleted Successfully", "Mesa register");
    }
  }

}