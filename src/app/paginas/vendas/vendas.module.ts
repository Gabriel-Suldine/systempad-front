import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendasPageRoutingModule } from './vendas-routing.module';

import { VendasPage } from './vendas.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    VendasPageRoutingModule
  ],
  declarations: [VendasPage]
})
export class VendasPageModule {} 
