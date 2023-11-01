import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClientesPageRoutingModule } from './add-clientes-routing.module';

import { AddClientesPage } from './add-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddClientesPageRoutingModule
  ],
  declarations: [AddClientesPage]
})
export class AddClientesPageModule {} 
