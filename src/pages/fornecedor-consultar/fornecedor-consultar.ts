import { OnInit, Component } from '@angular/core';
import { Fornecedor } from 'src/models/compras/fornecedor';
import { FornecedorService } from 'src/services/compras/fornecedor.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CompraService } from 'src/services/compras/compra.service';
import { Compra } from 'src/models/compras/compra';

@Component({
    selector: 'fornecedor-consultar',
    templateUrl: './fornecedor-consultar.html',
    styleUrls: ['./fornecedor-consultar.scss']
})

export class FornecedorConsultarComponent implements OnInit {

    fornecedores: Fornecedor[] = [];

    constructor(public dialog: MatDialog,
                private router: Router,
                private fornecedorService: FornecedorService,
                private compraService: CompraService
                ) {}

    ngOnInit(): void {
        this.getFornecedores();
    }

    getFornecedores() {
        this.fornecedorService.getFornecedores().subscribe(
            (fornecedores: Fornecedor[]) => {
                this.fornecedores = fornecedores;
                console.log(JSON.stringify(this.fornecedores));
            }
        );
    }

    goToCadastro(fornecedor: Fornecedor) {
        this.fornecedorService.setFornecedorParam(fornecedor);
        this.router.navigate(['/fornecedor-cadastrar']);
    }

    goToRetorno(fornecedor: Fornecedor) {
        if (this.fornecedorService.getSelecionar() === 'compra-cadastrar') {
            this.compraService.getCompraParam().fornecedor = fornecedor;
        }

        this.router.navigate(['/' + this.fornecedorService.getSelecionar()]);
        this.fornecedorService.setSelecionar('');
    }

    ativoInativo(fornecedor: Fornecedor) {
        if (fornecedor.inativo === 1) {
            fornecedor.inativo = 0;
        } else {
            fornecedor.inativo = 1;
        }

        this.fornecedorService.ativoInativo(fornecedor).subscribe(
            (forn: Fornecedor) => {
                if (forn.id === 0) {
                    alert('Não foi possivel inativar');
                }
                this.getFornecedores();
            }, (error) => {
                console.log(JSON.stringify(error.message));
              }
        );
      }
}
