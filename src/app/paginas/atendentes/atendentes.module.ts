import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtendentesPageRoutingModule } from './atendentes-routing.module';

import { AtendentesPage } from './atendentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtendentesPageRoutingModule
  ],
  declarations: [AtendentesPage]
})
export class AtendentesPageModule {}
