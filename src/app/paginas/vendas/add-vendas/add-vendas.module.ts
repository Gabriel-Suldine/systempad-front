import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVendasPageRoutingModule } from './add-vendas-routing.module';

import { AddVendasPage } from './add-vendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVendasPageRoutingModule
  ],
  declarations: [AddVendasPage]
})
export class AddVendasPageModule {}
