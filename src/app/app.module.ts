import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ControleComponent } from './controle/controle.component';
import { GraficosComponent } from './graficos/graficos.component';
import { PainelComponent } from './painel/painel.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ControleComponent,
    GraficosComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
