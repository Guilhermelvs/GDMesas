import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { ControleComponent } from './controle/controle.component';
import { GraficosComponent } from './graficos/graficos.component';

const APP_ROUTES: Routes = [
  {path:'', component: PainelComponent },
  {path:'controle', component: ControleComponent },
  {path:'graficos', component: GraficosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
