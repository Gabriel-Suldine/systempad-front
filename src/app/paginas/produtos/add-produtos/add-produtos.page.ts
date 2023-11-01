import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ProdutoService } from 'src/app/services/domain/produto.service';

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.page.html',
  styleUrls: ['./add-produtos.page.scss'],
})
export class AddProdutosPage implements OnInit {
  public modoDeEdicao = false;

  produtoForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute, 
    public ProdutoService: ProdutoService) { }
    submit() {


      if (!this.modoDeEdicao) {
        this.ProdutoService.insert(this.produtoForm.value)
          .subscribe(response => {
            this.presentAlert('Sucesso',
              'O Produto foi salvo com sucesso',
              ['Ok'])
          })
      }
      if (this.modoDeEdicao) {
        this.ProdutoService.update(this.produtoForm.value)
          .subscribe(response => {
            this.presentAlert('Sucesso',
              'O Produto foi atualizado com sucesso',
              ['Ok'])
          })
      }
  
    }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.modoDeEdicao = true;
      this.ProdutoService.findById(id).subscribe(response => {
        this.produtoForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome,Validators.required],
          preco: [response.preco],//validator não deixa salvar , Validators.required
          descição: [response.descricao],//validator não deixa salvar , Validators.required         
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.produtoForm = this.formBuilder.group({
        id,
        nome: ['', Validators.required],
        preco: ['', Validators.required],
        descricao: ['', Validators.required],
        
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
            this.navController.navigateForward('produtos');
          }
        }
      ]
    });

    await alert.present();

}}
