import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAtendentesPage } from './add-atendentes.page';

const routes: Routes = [
  {
    path: '',
    component: AddAtendentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAtendentesPageRoutingModule {} 
