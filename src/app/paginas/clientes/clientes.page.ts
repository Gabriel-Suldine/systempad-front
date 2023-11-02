import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClienteDTO } from 'src/app/models/clienteDTO';
import { ClienteService } from 'src/app/services/domain/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl:'./clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  cliente!: ClienteDTO[]; 

  constructor(public ClienteService: ClienteService, private navController: NavController) { } 

  ionViewDidEnter() {
    this.ClienteService.findAll()
      .subscribe({
        next:
          (response) => this.cliente = response,
        error:
          (error) => console.log(error,"ocorreu um erro")
      });
  }
  addEditCliente(){
    this.navController.navigateForward('add-clientes');
  }

  excluirCliente(id: number){
    this.ClienteService.delete(id)
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
