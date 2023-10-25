import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProdutosPage } from './add-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: AddProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProdutosPageRoutingModule {}
