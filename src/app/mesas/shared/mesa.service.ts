import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Mesa } from './mesa.model';
@Injectable()
export class MesaService {
  mesaList: AngularFireList<any>;
  selectedmesa: Mesa = new Mesa();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.mesaList = this.firebase.list('mesa');
    return this.mesaList;
  }

  insertmesa(mesa : Mesa)
  {
    this.mesaList.push({
      local: mesa.local,
      cadeiras: mesa.cadeiras,
      status: mesa.status
    });
  }

  updatemesa(mesa : Mesa){
    this.mesaList.update(mesa.$key,
      {
        local: mesa.local,
        cadeiras: mesa.cadeiras,
        status: mesa.status,
      });
  }

  deletemesa($key : string){
    this.mesaList.remove($key);
  }

}