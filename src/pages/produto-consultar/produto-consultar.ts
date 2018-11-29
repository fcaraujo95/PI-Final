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
}
