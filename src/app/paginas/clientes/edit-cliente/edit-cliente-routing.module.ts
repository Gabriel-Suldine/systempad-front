import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClientePage } from './edit-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: EditClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClientePageRoutingModule {}
