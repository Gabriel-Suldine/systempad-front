import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FininalizarVendaPage } from './fininalizar-venda.page';

const routes: Routes = [
  {
    path: '',
    component: FininalizarVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FininalizarVendaPageRoutingModule {}
