import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MesasComponent } from './mesas/mesas.component';
import { AtendentesComponent } from './atendentes/atendentes.component';
import { PainelComponent } from './painel/painel.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
/*import { MesaService } from './mesas/shared';*/
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    AtendentesComponent,
    PainelComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
/*providers: [
   /* MesaService*/
/*bootstrap: [AppComponent]*/
