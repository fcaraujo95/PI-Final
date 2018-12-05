import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Produto } from 'src/models/producao/produto';
import { ProdutoService } from 'src/services/produto/produto.service';

@Component({
    selector: 'produto-consultar',
    templateUrl: './produto-consultar.html',
    styleUrls: ['./produto-consultar.scss']
})

export class ProdutoConsultarComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(public dialog: MatDialog,
                private router: Router,
                private produtoService: ProdutoService
                ) {}

    ngOnInit(): void {
        this.getProdutos();
    }

    getProdutos() {
        this.produtoService.getProdutos().subscribe(
            (produtos: Produto[]) => {
                this.produtos = produtos;
            }
        );
    }

    goToCadastro(produto: Produto) {

    }

    ativoInativo(produto: Produto) {
        if (produto.inativo === 1) {
            produto.inativo = 0;
        } else {
            produto.inativo = 1;
        }

        this.produtoService.ativoInativo(produto).subscribe(
            (prod: Produto) => {
                if (prod.id === 0) {
                    alert('Não foi possivel inativar');
                }
                this.getProdutos();
            }, (error) => {
                console.log(JSON.stringify(error.message));
              }
        );
      }
}
