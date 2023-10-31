import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage
  },
  {
    path: 'add-clientes',
    loadChildren: () => import('./add-clientes/add-clientes.module').then( m => m.AddClientesPageModule)
  },  {
    path: 'edit-cliente',
    loadChildren: () => import('./edit-cliente/edit-cliente.module').then( m => m.EditClientePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
 