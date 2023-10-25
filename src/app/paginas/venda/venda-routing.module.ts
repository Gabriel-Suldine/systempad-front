import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendaPage } from './venda.page';

const routes: Routes = [
  {
    path: '',
    component: VendaPage
  },  {
    path: 'add-venda',
    loadChildren: () => import('./add-venda/add-venda.module').then( m => m.AddVendaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendaPageRoutingModule {}
