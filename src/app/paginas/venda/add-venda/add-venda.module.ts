import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVendaPageRoutingModule } from './add-venda-routing.module';

import { AddVendaPage } from './add-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVendaPageRoutingModule
  ],
  declarations: [AddVendaPage]
})
export class AddVendaPageModule {}
