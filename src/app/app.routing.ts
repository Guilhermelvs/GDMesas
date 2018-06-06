import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { AtendentesComponent } from './atendentes/atendentes.component';
import { MesasComponent } from './mesas/mesas.component';

const APP_ROUTES: Routes = [
  {path:'', component: PainelComponent },
  {path:'atendentes', component: AtendentesComponent },
  {path:'mesas', component: MesasComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
