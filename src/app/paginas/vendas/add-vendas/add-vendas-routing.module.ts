import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVendasPage } from './add-vendas.page';

const routes: Routes = [
  {
    path: '',
    component: AddVendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVendasPageRoutingModule {}
