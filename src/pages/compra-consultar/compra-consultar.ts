import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Produto } from 'src/models/producao/produto';
import { ProdutoService } from 'src/services/produto/produto.service';
import { CompraService } from 'src/services/compras/compra.service';
import { CompraItemService } from 'src/services/produto/compraItem.service';
import { CompraItem } from 'src/models/compras/compraItem';
import { EstoqueService } from 'src/services/produto/estoque.service';
import { Compra } from 'src/models/compras/compra';

@Component({
    selector: 'compra-consultar',
    templateUrl: './compra-consultar.html',
    styleUrls: ['./compra-consultar.scss']
})

export class CompraConsultarComponent implements OnInit {

    compras: Compra[] = [];

    constructor(public dialog: MatDialog,
                private router: Router,
                private produtoService: ProdutoService,
                private compraService: CompraService,
                private compraItemService: CompraItemService,
                ) {}

    ngOnInit(): void {
        this.getCompras();
    }

    getCompras() {
        this.compraService.getComprasNaoRecebidas().subscribe(
            (compras: Compra[]) => {
                this.compras = compras;
            }
        );
    }

    goToCadastro(compra: Compra) {
        this.compraService.setCompraParam(compra);
        this.compraItemService.setCompraItemParam(new CompraItem);
        this.router.navigate(['/compra-cadastrar']);
    }

    goToRetorno(compra: Compra) {
        if (this.compraService.getSelecionar() === 'recebimento-cadastrar') {
            this.compraItemService.setCompraItemParam(new CompraItem);
            this.compraService.setCompraParam(compra);
        }

        this.router.navigate(['/' + this.produtoService.getSelecionar()]);
        this.produtoService.setSelecionar('');
    }
}
