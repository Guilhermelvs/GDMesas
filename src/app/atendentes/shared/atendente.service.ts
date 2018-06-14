import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Atendentes} from './atendente.model';
@Injectable()

export class atendentesService {
    atendentesList: AngularFireList<any>;
  selectedatendentes: Atendentes = new Atendentes();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(){
    this.atendentesList = this.firebase.list('atendentes');
    return this.atendentesList;
  }
 
  insertatendentes(atendentes : Atendentes)
  {
    this.atendentesList.push({
      nome_atendente: atendentes.nome_atendente,
      matricula_atendente: atendentes.matricula_atendente,
    });
  }
 
  updateatendentes(atendentes : Atendentes){
    this.atendentesList.update(atendentes.$id_atendente,
      {
        nome_atendente: atendentes.nome_atendente,
        matricula_atendente: atendentes.matricula_atendente,
      });
  }
 
  deleteatendentes($id_atendente : string){
    this.atendentesList.remove($id_atendente);
  }
 
}
