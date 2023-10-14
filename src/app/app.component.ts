import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Venda', url: 'venda', icon: 'cash' },
    { title: 'Clientes', url: 'clientes', icon: 'person' },
    { title: 'Produtos', url: 'produtos', icon: 'cube' },
    { title: 'Cadastrar', url: 'cadastro', icon: 'add-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
