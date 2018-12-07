import { OnInit, Component } from '@angular/core';
<<<<<<< HEAD
import { Fornecedor } from 'src/models/compras/fornecedor';
import { FornecedorService } from 'src/services/compras/fornecedor.service';
=======
import { Comprador } from 'src/models/compras/comprador';
import { CompradorService } from 'src/services/compras/comprador.service';
>>>>>>> 35a95d95f9d0253a2d5633d90befa8678138f749
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CompraService } from 'src/services/compras/compra.service';
import { Compra } from 'src/models/compras/compra';

@Component({
    selector: 'fornecedor-cadastrar',
    templateUrl: './fornecedor-cadastrar.html',
    styleUrls: ['./fornecedor-cadastrar.scss']
})

export class FornecedorCadastrarComponent implements OnInit {

<<<<<<< HEAD
    fornecedor: Fornecedor;

    constructor(public dialog: MatDialog,
                private router: Router,
                private fornecedorService: FornecedorService,

                ) {}

    ngOnInit(): void {
        this.fornecedor = this.fornecedorService.getFornecedorParam();
    }

    public cadastrar(): void {
        console.log(JSON.stringify(this.fornecedor));
            this.fornecedorService.inserirFornecedor(this.fornecedor)
            .subscribe(
              (forneedor: Fornecedor) => {
                console.log('Fornecedor retornado => ', this.fornecedor);
                alert('Fornecedor cadastrado com sucesso!');
                this.fornecedor = new Fornecedor();
              },
              (error) => {
                alert('Fornecedor não cadastrado');
                this.fornecedor = new Fornecedor();
              }
            );
    }
=======
    compradores: Comprador[] = [];

    constructor(public dialog: MatDialog,
                private router: Router,
                private compradorService: CompradorService,
                private compraService: CompraService
                ) {}

    ngOnInit(): void {
        // this.getCompradores();
    }

    getCompradores() {
        this.compradorService.getCompradores().subscribe(
            (compradores: Comprador[]) => {
                this.compradores = compradores;
                console.log(JSON.stringify(this.compradores));
            }
        );
    }

    goToCadastro(comprador: Comprador) {
        this.compradorService.setCompradorParam(comprador);
        // this.router.navigate(['/comprador-cadastrar']);
    }

    goToRetorno(comprador: Comprador) {
        if (this.compradorService.getSelecionar() === 'compra-cadastrar') {
            this.compraService.getCompraParam().comprador = comprador;
        }

        this.router.navigate(['/' + this.compradorService.getSelecionar()]);
        this.compradorService.setSelecionar('');
    }

    ativoInativo(comprador: Comprador) {
        if (comprador.inativo === 1) {
            comprador.inativo = 0;
        } else {
            comprador.inativo = 1;
        }

        this.compradorService.ativoInativo(comprador).subscribe(
            (comp: Comprador) => {
                if (comp.id === 0) {
                    alert('Não foi possivel inativar');
                }
                this.getCompradores();
            }, (error) => {
                console.log(JSON.stringify(error.message));
              }
        );
      }
>>>>>>> 35a95d95f9d0253a2d5633d90befa8678138f749
}
