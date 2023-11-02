import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtendentesPage } from './atendentes.page';

const routes: Routes = [
  {
    path: '',
    component: AtendentesPage
  },
  {
    path: 'add-atendentes',
    loadChildren: () => import('./add-atendentes/add-atendentes.module').then( m => m.AddAtendentesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendentesPageRoutingModule {}
