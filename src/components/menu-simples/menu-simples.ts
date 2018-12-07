import { Component, Input, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'menu-simples-component',
  templateUrl: './menu-simples.html',
  styleUrls: ['./menu-simples.scss']
})
export class MenuSimplesComponent implements OnInit {
  // title = 'PI-Final';
  menuAtivoNome: string;
  elementEmpresa: any = '';
  elementProduto: any = '';
  elementEstoque: any = '';
  elementFornecedor: any = '';
  elementComprador: any = '';
  elementCompra: any = '';
  elementCliente: any = '';
  elementVenda: any = '';
  elementContainer: any = '';


  constructor(private router: Router) {}

  @Input() voltarPara: string;

  ngOnInit() { }

}
