import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { PainelComponent } from './painel/painel.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { routing } from './app.routing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Import do component atendentes */
import { AtendenteComponent } from './atendentes/atendente/atendente.component';
import { AtendentesComponent } from './atendentes/atendentes.component';
import { AtendenteListComponent } from './atendentes/atendente-list/atendente-list.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesaComponent } from './mesas/mesa/mesa.component';
import { MesaListComponent } from './mesas/mesa-list/mesa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    AtendentesComponent,
    PainelComponent,
    AtendenteComponent,
    AtendenteListComponent,
    MesaComponent,
    MesaListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
