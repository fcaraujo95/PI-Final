import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/services/produto/produto.service';
import { Produto } from '../../models/producao/produto';


@Component({
  selector: 'produtos-cadastrar',
  templateUrl: './produtos-cadastrar.html',
  styleUrls: ['./produtos-cadastrar.scss']
})

export class ProdutosCadastrarComponent implements OnInit {
  // title = 'PI-Final';
    errMsg: string;

    public produto: Produto;

    constructor(public dialog: MatDialog,
                private _http: HttpClient,
                private router: Router,
                private produtoService: ProdutoService) { }

    ngOnInit() {
      this.produto = this.produtoService.getProdutoParam();
      console.log(JSON.stringify(this.produto));
    }

    public cadastrar(): void {
      if (this.produto.id > 0) {
        this.produtoService.alterarProduto(this.produto)
        .subscribe(
          (produto: Produto) => {
            if (produto.id > 0) {
              alert('Produto alterado com sucesso!');
            } else {
              alert('Produto não alterado');
              this.router.navigate(['/produto-page']);
            }
            this.produto = new Produto();
          },
          (error) => {
            this.errMsg = JSON.stringify(error.message);
            alert('Produto não alterado');
            this.produto = new Produto();
          }
        );
      } else {
          this.produtoService.inserirProduto(this.produto)
          .subscribe(
            (produto: Produto) => {
              if (produto.id > 0) {
                alert('Produto cadastrado com sucesso!');
              } else {
                alert('Produto não cadastrado');
                this.router.navigate(['/produto-page']);
              }
              this.produto = new Produto();
            },
            (error) => {
              this.errMsg = JSON.stringify(error.message);
              alert('Produto não cadastrado');
              this.produto = new Produto();
            }
          );
      }
    }

  }
