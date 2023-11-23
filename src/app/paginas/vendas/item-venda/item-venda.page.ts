import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoDTO } from'src/app/models/produtoDTO';
import { ProdutoService } from 'src/app/services/domain/produto.service';


@Component({
  selector: 'app-item-venda',
  templateUrl: './item-venda.page.html',
  styleUrls: ['./item-venda.page.scss'],
})
export class ItemVendaPage implements OnInit {
  produto!: ProdutoDTO[]; 

  constructor(public produtoService: ProdutoService, private nav: NavController) { }
  ionViewDidEnter() {
    this.produtoService.findAll()
      .subscribe({
        next:
          (response) => this.produto = response,
        error:
          (error) => console.log(error,"ocorreu um erro")
      });
  }

  ngOnInit() {
  }
  navegacao(x: string) {    
    this.nav.navigateForward(x);   

}

} 
