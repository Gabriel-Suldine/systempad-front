import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendaPageRoutingModule } from './venda-routing.module';

import { VendaPage } from './venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendaPageRoutingModule
  ],
  declarations: [VendaPage]
})
export class VendaPageModule {}
