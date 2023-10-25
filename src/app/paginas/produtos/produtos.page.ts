import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/domain/Produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(public produtoService: ProdutoService) { }
  ionViewDidEnter() {
    this.produtoService.findAll()
    .subscribe(response => {
    console.log(response);
    }, error => {
    console.log(error);
    })
    }

  ngOnInit() {
  }

}
