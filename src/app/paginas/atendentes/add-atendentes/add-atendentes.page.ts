import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AtendenteService } from 'src/app/services/domain/atendente.service';

@Component({
  selector: 'app-add-atendentes',
  templateUrl: './add-atendentes.page.html',
  styleUrls: ['./add-atendentes.page.scss'],
})
export class AddAtendentesPage implements OnInit {

  public modoDeEdicao = false;

  atendenteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    public AtendenteService: AtendenteService) { }
    
  submit() {


    if (!this.modoDeEdicao) {
      this.AtendenteService.insert(this.atendenteForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso',
            'O atendente foi salvo com sucesso',
            ['Ok'])
        })
    }
    if (this.modoDeEdicao) {
      this.AtendenteService.update(this.atendenteForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso',
            'O atendente foi atualizado com sucesso',
            ['Ok'])
        })
    }

  }

  ngOnInit() {
    
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.modoDeEdicao = true;
      this.AtendenteService.findById(id).subscribe(response => {
        this.atendenteForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome,Validators.required],
          cpf: [response.cpf,Validators.required],
          telefone: [response.telefone,Validators.required],
          email: [response.email, Validators.required],         
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.atendenteForm = this.formBuilder.group({
        id,
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        telefone: ['', Validators.required],
        email: ['', Validators.required],
        endereco: ['', Validators.required],
      })
      
    }
    
  }


  async presentAlert(header: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('atendentes');
          }
        }
      ]
    });

    await alert.present();

}
}