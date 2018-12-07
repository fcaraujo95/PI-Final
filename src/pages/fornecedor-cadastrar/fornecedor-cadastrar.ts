import { OnInit, Component } from '@angular/core';
import { Fornecedor } from 'src/models/compras/fornecedor';
import { FornecedorService } from 'src/services/compras/fornecedor.service';
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
}
