import { OnInit, Component } from '@angular/core';
import { EstoqueService } from 'src/services/produto/estoque.service';
import { ProdutoService } from 'src/services/produto/produto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Produto } from 'src/models/producao/produto';
import { HttpClient } from '@angular/common/http';
import { Estoque } from 'src/models/producao/estoque';
import { isNull } from 'util';

@Component({
    selector: 'estoque-cadastrar',
    templateUrl: './estoque-cadastrar.html',
    styleUrls: ['./estoque-cadastrar.scss']
  })

export class EstoqueCadastrarComponent implements OnInit {

    public produto: Produto;
    public estoque: Estoque;

    constructor(public dialog: MatDialog,
        private _http: HttpClient,
        private router: Router,
        private produtoService: ProdutoService,
        private estoqueService: EstoqueService) { }

    ngOnInit(): void {
        this.produto = this.produtoService.getProdutoParam();
        this.estoque = new Estoque();
    }

    getProduto() {
        this.produtoService.setSelecionar('estoque-cadastrar');
        this.produtoService.setProdutoParam(this.produto);
        this.router.navigate(['/produtos-consultar']);
    }

    getProdutoOnBlur() {
        this.produtoService.getProdutoId(this.produto).subscribe(
            (produto: Produto) => {
                this.produto = produto;
                this.estoque.idProduto = this.produto.id;
            },
            (error) => {
                this.produto  = new Produto();
                this.estoque = new Estoque();
            }
        );
    }

    cadastrar(estoque: Estoque) {
        estoque.idProduto = this.produto.id;

        if (estoque.idProduto === 0) {
            alert('Atenção... favor informar um produto!');
            return false;
        }

        if (estoque.motivo === '') {
            alert('Atenção... favor informar o motivo!');
            return false;
        }

        if (isNull(estoque.quantidade) || estoque.quantidade === 0) {
            alert('Atenção... favor informar a quantidade!');
            return false;
        }

        this.estoqueService.inserirEstoque(estoque).subscribe(
            (est: Estoque) => {
                if (est.id > 0) {
                    alert('Ajuste de estoque salvo com sucesso!');
                    this.produto = new Produto();
                    this.estoque = new Estoque();
                } else {
                    alert('Ocorreu algum erro, favor contactar o suporte tecnico!');
                }
            }, (error) => {
                console.log(error.message);
            }
        );
    console.log(JSON.stringify(estoque));
    }

}
