import { OnInit, Component } from '@angular/core';

import { Fornecedor } from 'src/models/compras/fornecedor';
import { FornecedorService } from 'src/services/compras/fornecedor.service';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/models/cidade';

@Component({
    selector: 'fornecedor-cadastrar',
    templateUrl: './fornecedor-cadastrar.html',
    styleUrls: ['./fornecedor-cadastrar.scss']
})

export class FornecedorCadastrarComponent implements OnInit {

    fornecedor: Fornecedor;
    localizacao: Cidade[];

    constructor(public dialog: MatDialog,
                private router: Router,
                private fornecedorService: FornecedorService,
                private _http: HttpClient
                ) {}

    ngOnInit(): void {
        this.getCidade();
        this.fornecedor = this.fornecedorService.getFornecedorParam();
    }

    public cadastrar(): void {
        console.log(JSON.stringify(this.fornecedor));
        if (this.fornecedor.id > 0) {
            this.fornecedorService.alterarForncedor(this.fornecedor)
            .subscribe(
              (forneedor: Fornecedor) => {
                console.log('Fornecedor retornado => ', this.fornecedor);
                alert('Fornecedor Alterado com sucesso!');
                this.fornecedor = new Fornecedor();
              },
              (error) => {
                alert('Fornecedor não alterado');
                this.fornecedor = new Fornecedor();
              }
            );
        } else {
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

    getCidade() {
      this._http.get('http://localhost:8080/pi/servicos/cidade/lista')
      .subscribe(
        (cidade: Cidade[]) => {
          console.log('Cidade! ', cidade);
          this.localizacao = cidade;
          console.log(this.localizacao);
        },
        (error) => {
          console.log('errooooo', error);
        }
      );
    }
}
