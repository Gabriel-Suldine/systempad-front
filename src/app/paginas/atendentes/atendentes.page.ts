import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AtendenteDTO } from 'src/app/models/atendenteDTO';
import { AtendenteService } from 'src/app/services/domain/atendente.service';


@Component({
  selector: 'app-atendentes',
  templateUrl: './atendentes.page.html',
  styleUrls: ['./atendentes.page.scss'],
})
export class AtendentesPage implements OnInit {
  atendente!:AtendenteDTO[];

  constructor(public AtendenteService : AtendenteService, private navController: NavController) { }
  
  ionViewDidEnter() {
    this.AtendenteService.findAll()
      .subscribe({
        next:
          (response) => this.atendente = response,
        error:
          (error) => console.log(error,"ocorreu um erro")
      });
  }
  
  addEditAtendente(){
    this.navController.navigateForward('add-clientes');
  }

  excluirAtendente(id: number){
    this.AtendenteService.delete(id)
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
