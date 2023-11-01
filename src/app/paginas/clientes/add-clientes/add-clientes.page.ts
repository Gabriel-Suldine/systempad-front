import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/domain/cliente.service';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.page.html',
  styleUrls: ['./add-clientes.page.scss'],
})
export class AddClientesPage implements OnInit {
  
  public modoDeEdicao = false;

  clienteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    public clienteService: ClienteService) { }


  submit() {


    if (!this.modoDeEdicao) {
      this.clienteService.insert(this.clienteForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso',
            'O Cliente foi salvo com sucesso',
            ['Ok'])
        })
    }
    if (this.modoDeEdicao) {
      this.clienteService.update(this.clienteForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso',
            'O Cliente foi atualizado com sucesso',
            ['Ok'])
        })
    }

  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.modoDeEdicao = true;
      this.clienteService.findById(id).subscribe(response => {
        this.clienteForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome, Validators.required],
          CPF: [response.cpf, Validators.required],
          telefone: [response.telefone, Validators.required],
          email: [response.email, Validators.required],
          endereco: [response.endereco, Validators.required],
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.clienteForm = this.formBuilder.group({
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
            this.navController.navigateForward('clientes');
          }
        }
      ]
    });

    await alert.present();

    }}
