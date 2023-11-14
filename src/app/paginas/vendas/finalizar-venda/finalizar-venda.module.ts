import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarVendaPageRoutingModule } from './finalizar-venda-routing.module';

import { FinalizarVendaPage } from './finalizar-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarVendaPageRoutingModule
  ],
  declarations: [FinalizarVendaPage]
})
export class FinalizarVendaPageModule {}
