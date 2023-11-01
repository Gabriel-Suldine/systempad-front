import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./paginas/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'add-produtos/:id',
    loadChildren: () => import('./paginas/produtos/add-produtos/add-produtos.module').then( m => m.AddProdutosPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./paginas/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'add-clientes/:id',
    loadChildren: () => import('./paginas/clientes/add-clientes/add-clientes.module').then( m => m.AddClientesPageModule)
  },
  {
    path: 'venda',
    loadChildren: () => import('./paginas/venda/venda.module').then( m => m.VendaPageModule)
  },
  {
    path: 'atendente',
    loadChildren: () => import('./paginas/atendente/atendente.module').then( m => m.AtendentePageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
