import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtendentePage } from './atendente.page';

const routes: Routes = [
  {
    path: '',
    component: AtendentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendentePageRoutingModule {}
