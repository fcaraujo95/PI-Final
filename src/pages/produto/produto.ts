import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/services/produto/produto.service';
import { Produto } from 'src/models/producao/produto';

@Component({
  selector: 'produto-page',
  templateUrl: './produto.html',
  styleUrls: ['./produto.scss']
})
export class ProdutoComponent {
  // title = 'PI-Final';

  constructor(public dialog: MatDialog,
    private _http: HttpClient,
    private router: Router,
    private produtoService: ProdutoService) { }

  public goToCadastroProduto(): void {
    this.produtoService.setProdutoParam(new Produto());
    this.router.navigate(['/produtos-cadastrar']);
  }

  public goToConsultarProduto(): void {
    this.router.navigate(['/produtos-consultar']);
  }
}
