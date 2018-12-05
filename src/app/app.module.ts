import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { Http } from '@angular/http';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from '../pages/home-page/home-page';
import { ProdutoComponent } from '../pages/produto/produto';
import { EstoqueComponent } from '../pages/estoque/estoque';
import { FornecedorComponent } from '../pages/fornecedor/fornecedor';
import { CompraComponent } from '../pages/compra/compra';
import { ClienteComponent } from '../pages/cliente/cliente';
import { VendaComponent } from '../pages/venda/venda';
import { MenuComponent } from '../components/menu/menu';
import { UsuarioCadastrarComponent } from '../pages/usuario-cadastrar/usuario-cadastrar';
import { UsuarioConsultarComponent } from '../pages/usuario-consultar/usuario-consultar';
import { ProdutoConsultarComponent } from '../pages/produto-consultar/produto-consultar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuSimplesComponent } from '../components/menu-simples/menu-simples';
import { ProdutosCadastrarComponent } from '../pages/produtos-cadastrar/produtos-cadastrar';

const appRoutes: Routes = [
  { path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'produto-page',
    component: ProdutoComponent
  },
  {
    path: 'estoque-page',
    component: EstoqueComponent
  },
  {
    path: 'fornecedor-page',
    component: FornecedorComponent
  },
  {
    path: 'compra-page',
    component: CompraComponent
  },
  {
    path: 'cliente-page',
    component: ClienteComponent
  },
  {
    path: 'venda-page',
    component: VendaComponent
  },
  {
    path: 'usuario-cadastrar',
    component: UsuarioCadastrarComponent
  },
  {
    path: 'usuario-consultar',
    component: UsuarioConsultarComponent
  },
  {
    path: 'produtos-cadastrar',
    component: ProdutosCadastrarComponent
  },
  {
    path: 'produto-consultar',
    component: ProdutoConsultarComponent
  }



];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ProdutoComponent,
    EstoqueComponent,
    FornecedorComponent,
    CompraComponent,
    ClienteComponent,
    VendaComponent,
    MenuComponent,
    UsuarioCadastrarComponent,
    UsuarioConsultarComponent,
    MenuSimplesComponent,
    ProdutosCadastrarComponent
    ProdutoConsultarComponent,
    MenuSimplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    UsuarioCadastrarComponent,
    UsuarioConsultarComponent,
    ProdutoConsultarComponent
  ],
  providers: [
    Http,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
