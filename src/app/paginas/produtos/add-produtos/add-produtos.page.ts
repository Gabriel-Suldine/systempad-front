import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/domain/Produto.service';

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.page.html',
  styleUrls: ['./add-produtos.page.scss'],
})
export class AddProdutosPage implements OnInit {

  constructor( public ProdutoService: ProdutoService) { }

  ngOnInit() {
  }

}
