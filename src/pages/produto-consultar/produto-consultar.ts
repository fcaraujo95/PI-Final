import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Produto } from 'src/models/producao/produto';
import { ProdutoService } from 'src/services/produto/produto.service';
import { CompraService } from 'src/services/compras/compra.service';
import { CompraItemService } from 'src/services/produto/compraItem.service';
import { CompraItem } from 'src/models/compras/compraItem';

@Component({
    selector: 'produto-consultar',
    templateUrl: './produto-consultar.html',
    styleUrls: ['./produto-consultar.scss']
})

export class ProdutoConsultarComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(public dialog: MatDialog,
                private router: Router,
                private produtoService: ProdutoService,
                private compraService: CompraService,
                private compraItemService: CompraItemService
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
        this.produtoService.setProdutoParam(produto);
        this.router.navigate(['/produtos-cadastrar']);
    }

    goToRetorno(produto: Produto) {
        if (this.produtoService.getSelecionar() === 'compra-cadastrar') {
            this.compraItemService.getCompraItemParam().produto = produto;
        }

        this.router.navigate(['/' + this.produtoService.getSelecionar()]);
        this.produtoService.setSelecionar('');
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
