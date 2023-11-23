import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.page.html',
  styleUrls: ['./finalizar-venda.page.scss'],
})
export class FinalizarVendaPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  navegacao(x: string) {    
      this.nav.navigateForward(x);   

}}
  