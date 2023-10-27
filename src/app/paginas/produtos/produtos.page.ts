import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoDTO } from 'src/app/models/ProdutoDTO';
import { ProdutoService } from 'src/app/services/domain/Produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl:'./produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  produto!: ProdutoDTO[];

  constructor(public produtoService: ProdutoService, private navController: NavController) { }
  ionViewDidEnter() {
    this.produtoService.findAll()
      .subscribe({
        next:
          (response) => this.produto = response,
        error:
          (error) => console.log(error,"ocorreu um erro")
      });
  }
  addEditProduto(){
    this.navController.navigateForward('add-produtos');
  }

  excluirEquipamento(id: number){
    this.produtoService.delete(id)
                           .subscribe({
                              next: 
                                (response) => window.location.reload(),                              
                              error:
                                (error) => console.log(error)
                           });
  }


  ngOnInit() {
  }

}
