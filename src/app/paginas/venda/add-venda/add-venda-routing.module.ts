import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVendaPage } from './add-venda.page';

const routes: Routes = [
  {
    path: '',
    component: AddVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVendaPageRoutingModule {}
