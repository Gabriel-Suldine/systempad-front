import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public nav: NavController, public menu: MenuController) { }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  logar() {
    this.nav.navigateForward('home');
  }
  cadastrar() {
    this.nav.navigateForward('');
  }



  ngOnInit() {
  }

}
