import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoService } from './services/domain/produto.service';
import { ClienteService } from './services/domain/cliente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientesPage } from './paginas/clientes/add-clientes/add-clientes.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ProdutoService, ClienteService,AppComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}
