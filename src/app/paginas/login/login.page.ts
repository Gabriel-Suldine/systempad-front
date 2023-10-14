import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user = {
    usuario: "",
    senha: ""
  }

  constructor(public nav: NavController, public menu: MenuController, private toastController: ToastController) { }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Dados incorreto!',
      duration: 500,
      position: position
    });
    await toast.present();
  }



  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  logar(x: string) {
    if (this.user.usuario == "teste" && this.user.senha == "0000") {
      this.nav.navigateForward(x);
    } else {
      this.presentToast('top')
    }
  

  }
    cadastrar(x: string) {
      this.nav.navigateForward(x);
    }
  ngOnInit() {
  }
}
