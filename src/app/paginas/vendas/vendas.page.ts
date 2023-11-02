import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VendaDTO } from'src/app/models/vendaDTO';
import { VendaService } from 'src/app/services/domain/venda.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
})
export class VendasPage implements OnInit {
  venda!: VendaDTO[]; 


  constructor(public VendaService: VendaService, private navController: NavController) { }
  ionViewDidEnter() {
    this.VendaService.findAll()
      .subscribe({
        next:
          (response) => this.venda = response,
        error:
          (error) => console.log(error,"ocorreu um erro")
      });
  }
  addEditProduto(){
    this.navController.navigateForward('add-vendas');
  }

  excluirVenda(id: number){
    this.VendaService.delete(id)
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
 