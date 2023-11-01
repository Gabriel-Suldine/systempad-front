import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProdutosPageRoutingModule } from './add-produtos-routing.module';

import { AddProdutosPage } from './add-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddProdutosPageRoutingModule
  ],
  declarations: [AddProdutosPage]
})
export class AddProdutosPageModule {} 
