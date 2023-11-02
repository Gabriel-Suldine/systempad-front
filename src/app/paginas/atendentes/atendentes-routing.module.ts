import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtendentesPage } from './atendentes.page';

const routes: Routes = [
  {
    path: '',
    component: AtendentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendentesPageRoutingModule {}
