import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MesasComponent } from './mesas/mesas.component';
import { ControleComponent } from './controle/controle.component';
import { MesaComponent } from './mesa/mesa.component';
import { LocalComponent } from './local/local.component';


@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    ControleComponent,
    MesaComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
