import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAtendentesPageRoutingModule } from './add-atendentes-routing.module';

import { AddAtendentesPage } from './add-atendentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddAtendentesPageRoutingModule
  ],
  declarations: [AddAtendentesPage]
})
export class AddAtendentesPageModule {}
 