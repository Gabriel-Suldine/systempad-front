import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FininalizarVendaPageRoutingModule } from './fininalizar-venda-routing.module';

import { FininalizarVendaPage } from './fininalizar-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FininalizarVendaPageRoutingModule
  ],
  declarations: [FininalizarVendaPage]
})
export class FininalizarVendaPageModule {}
