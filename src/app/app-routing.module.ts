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
    path: 'vendas',
    loadChildren: () => import('./paginas/vendas/vendas.module').then( m => m.VendasPageModule)
  },
  {
    path: 'item-venda/:id',
    loadChildren: () => import('./paginas/vendas/item-venda/item-venda.module').then( m => m.ItemVendaPageModule)
  },
  {
    path: 'atendentes',
    loadChildren: () => import('./paginas/atendentes/atendentes.module').then( m => m.AtendentesPageModule)
  },
  {
    path: 'add-atendentes/:id',
    loadChildren: () => import('./paginas/atendentes/add-atendentes/add-atendentes.module').then( m => m.AddAtendentesPageModule)
  },


  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
