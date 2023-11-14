import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasPage } from './vendas.page';

const routes: Routes = [
  {
    path: '',
    component: VendasPage
  },
  {
    path: 'item-venda',
    loadChildren: () => import('./item-venda/item-venda.module').then( m => m.ItemVendaPageModule)
  },
  {
    path: 'finalizar-venda',
    loadChildren: () => import('./finalizar-venda/finalizar-venda.module').then( m => m.FinalizarVendaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasPageRoutingModule {} 
