import { OnInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FornecedorService } from 'src/services/compras/fornecedor.service';
import { CompraService } from 'src/services/compras/compra.service';
import { Compra } from 'src/models/compras/compra';
import { Fornecedor } from 'src/models/compras/fornecedor';
import { CompradorService } from 'src/services/compras/comprador.service';
import { ProdutoService } from 'src/services/produto/produto.service';
import { Comprador } from 'src/models/compras/comprador';
import { Produto } from 'src/models/producao/produto';
import { CompraItem } from 'src/models/compras/compraItem';
import { CompraItemService } from 'src/services/produto/compraItem.service';


@Component({
    selector: 'compra-cadastrar',
    templateUrl: './compra-cadastrar.html',
    styleUrls: ['./compra-cadastrar.scss']
  })

export class CompraCadastrarComponent implements OnInit {

    public compra: Compra = new Compra();
    public compraItem: CompraItem = new CompraItem();

    constructor(public dialog: MatDialog,
        private router: Router,
        private fornecedorService: FornecedorService,
        private compradorService: CompradorService,
        private produtoService: ProdutoService,
        private compraService: CompraService,
        private compraItemService: CompraItemService
        ) {}

    ngOnInit(): void {
        this.compra = this.compraService.getCompraParam();
        this.compraItem = this.compraItemService.getCompraItemParam();
        console.log(JSON.stringify(this.compra.compraItens));
    }

    getFornecedor() {
        this.fornecedorService.setSelecionar('compra-cadastrar');
        this.compraService.setCompraParam(this.compra);
        this.router.navigate(['/fornecedor-consultar']);
    }

    getFornecedorOnBlur() {
        this.fornecedorService.getFornecedorId(this.compra.fornecedor).subscribe(
            (fornecedor: Fornecedor) => {
                this.compra.fornecedor = fornecedor;
            },
            (error) => {
              this.compra.fornecedor = new Fornecedor();
            }
        );
    }

    getComprador() {
        this.compradorService.setSelecionar('compra-cadastrar');
        this.compraService.setCompraParam(this.compra);
        this.router.navigate(['/comprador-consultar']);
    }

    getCompradorOnBlur() {
        this.compradorService.getCompradorId(this.compra.comprador).subscribe(
            (comprador: Comprador) => {
                this.compra.comprador = comprador;
            },
            (error) => {
              this.compra.comprador = new Comprador();
            }
        );
    }

    getProduto() {
        this.produtoService.setSelecionar('compra-cadastrar');
        this.compraItemService.setCompraItemParam(this.compraItem);
        this.router.navigate(['/produtos-consultar']);
    }

    getProdutoOnBlur() {
        this.produtoService.getProdutoId(this.compraItem.produto).subscribe(
            (produto: Produto) => {
                this.compraItem.produto = produto;
            },
            (error) => {
                this.compraItem.produto  = new Produto();
            }
        );
    }

    adicionarItem(compraItem: CompraItem) {
        if (compraItem.produto.id === 0) {
            alert('Atenção... Favor informar um produto!');
            return false;
        }

        if (compraItem.quantidadeItem <= 0) {
            alert('Atenção... Favor informar a quantidade!');
            return false;
        }

        if (compraItem.produto.custo.custo <= 0) {
            alert('Atenção... Favor informar o custo do produto!');
            return false;
        }

        compraItem.custoItem = this.compraItem.produto.custo.custo;
        compraItem.totalItem = this.compraItem.custoItem * this.compraItem.quantidadeItem ;
        this.compra.compraItens.push(compraItem);
        this.compraItem = new CompraItem();
        console.log(this.compra.compraItens.length);
    }

    cadastrar(compra: Compra) {
        if (compra.fornecedor.id === 0) {
            alert('Atenção... Favor informar um fornecedor!');
            return false;
        }

        if (compra.comprador.id === 0) {
            alert('Atenção... Favor informar um comprador!');
            return false;
        }

        if (compra.compraItens.length <= 0) {
            alert('Atenção... Favor informar pelo menos um produto!');
            return false;
        }
        if (compra.id > 0) {
            this.compraService.alterarCompra(compra).subscribe(
                (com: Compra) => {
                    if (com.id > 0) {
                        alert('Pedido de compra alterado com sucesso!');
                        this.compra = new Compra();
                        this.compraItem = new CompraItem();
                    } else {
                        alert('Não foi possivel alterar, acione o suporte tecnico!');
                        this.router.navigate(['/compra-page']);
                    }
                },
                (error) => {
                    alert(error.message);
                }
            );
        } else {
            this.compraService.inserirCompra(compra).subscribe(
                (com: Compra) => {
                    if (com.id > 0) {
                        alert('Pedido de compra salvo com sucesso!');
                        this.compra = new Compra();
                        this.compraItem = new CompraItem();
                    } else {
                        alert('Não foi possivel salvar, acione o suporte tecnico!');
                        this.router.navigate(['/compra-page']);
                    }
                },
                (error) => {
                    alert(error.message);
                }
            );
        }
    }
}
