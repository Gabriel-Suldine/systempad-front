import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtendentePageRoutingModule } from './atendente-routing.module';

import { AtendentePage } from './atendente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtendentePageRoutingModule
  ],
  declarations: [AtendentePage]
})
export class AtendentePageModule {}
