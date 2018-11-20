import { Component, Input, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class MenuComponent implements OnInit{
  // title = 'PI-Final';
  menuAtivoNome: string;
  elementEmpresa: any = '';
  elementProduto: any = '';
  elementEstoque: any = '';
  elementFornecedor: any = '';
  elementCompra: any = '';
  elementCliente: any = '';
  elementVenda: any = '';
  elementContainer: any = '';


  constructor(private router: Router) {}

  @Input() menuAtivo: string;

  ngOnInit() {

    console.log('*************** ', this.menuAtivo);

    this.elementEmpresa = document.getElementById('empresa');
    this.elementProduto = document.getElementById('produto');
    this.elementEstoque = document.getElementById('estoque');
    this.elementFornecedor = document.getElementById('fornecedor');
    this.elementCompra = document.getElementById('compra');
    this.elementCliente = document.getElementById('cliente');
    this.elementVenda = document.getElementById('venda');

    switch(this.menuAtivo){

      case "home":
        console.log('entrei');
        document.getElementById('empresa').classList.add('active');
        break;

      case "produto":
        document.getElementById('produtos').classList.add('active');
        break;

      case "estoque":
        document.getElementById('estoque').classList.add('active');
        break;

      case "fornecedor":
        document.getElementById('fornecedor').classList.add('active');
        break;

      case "compra":
        document.getElementById('compra').classList.add('active');
        break;

      case "cliente":
        document.getElementById('cliente').classList.add('active');
        break;

      case "venda":
        document.getElementById('venda').classList.add('active');
        break;
    }
  }

  watchMenu() {
    this.router.events.subscribe((event: any) => {
      console.log(event);
      if(event.url === '/') {
          console.log('MAMAE DE DEUSSSSSSSSSSSSSSSSSSSS');
          document.getElementById('nav-menu').style.display = 'none';
      } else {
        document.getElementById('nav-menu').style.display = 'inline';
      }
  });
  }

  goToEmpresa(){
    // try {
    //   this.elementProduto.classList.remove('active');
    //   this.elementEstoque.classList.remove('active');
    //   this.elementFornecedor.classList.remove('active');
    //   this.elementCompra.classList.remove('active');
    //   this.elementCliente.classList.remove('active');
    //   this.elementVenda.classList.remove('active');
    // } catch (error) {
    //   console.log(error);
    // }
    // this.elementEmpresa.classList.add('active');
    this.router.navigate(['/home-page']);
  }

  goToProdutos(){
    document.getElementById('empresa').classList.remove('active');
    // document.getElementById('produto').classList.add('active');
    this.router.navigate(['/produto-page']);
  }

  goToEstoque(){
    let element = document.getElementById('estoque');
    element.classList.add("active");
    this.router.navigate(['/estoque-page']);
  }

  goToFornecedor(){
    let element = document.getElementById('fornecedor');
    element.classList.add("active");
    this.router.navigate(['/fornecedor-page']);
  }

  goToCompra(){
    let element = document.getElementById('compra');
    element.classList.add("active");
    this.router.navigate(['/compra-page']);
  }

  goToCliente(){
    let element = document.getElementById('cliente');
    element.classList.add("active");
    this.router.navigate(['/cliente-page']);
  }

  goToVenda(){
    let element = document.getElementById('venda');
    element.classList.add("active");
    this.router.navigate(['/venda-page']);
  }

}
