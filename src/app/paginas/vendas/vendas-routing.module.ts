import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasPage } from './vendas.page';

const routes: Routes = [
  {
    path: '',
    component: VendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasPageRoutingModule {}
