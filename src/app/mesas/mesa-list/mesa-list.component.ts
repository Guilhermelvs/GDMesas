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
  mesaList = [];
  constructor(private mesaService: MesaService, private tostr: ToastrService) { }

  ngOnInit() {
    
  }

  onEdit(emp: Mesa) {
    this.mesaService.selectedmesa = Object.assign({}, emp);
  }

  getData(){
    let x = this.mesaService.getData();
    console.log('aqui');
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        console.log(y);
        this.mesaList.push(y);
      });
    });
  }


  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.mesaService.deletemesa(key);
      this.tostr.warning("Deleted Successfully", "Mesa register");
    }
  }

}