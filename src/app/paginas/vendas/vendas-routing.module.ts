import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasPage } from './vendas.page';

const routes: Routes = [
  {
    path: '',
    component: VendasPage
  },
  {
    path: 'add-vendas',
    loadChildren: () => import('./add-vendas/add-vendas.module').then( m => m.AddVendasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasPageRoutingModule {}
