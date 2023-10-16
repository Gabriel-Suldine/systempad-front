import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoService } from './services/domain/Produto.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule ,IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ProdutoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
