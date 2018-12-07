import { OnInit, Component } from '@angular/core';
import { Comprador } from 'src/models/compras/comprador';
import { CompradorService } from 'src/services/compras/comprador.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CompraService } from 'src/services/compras/compra.service';
import { Compra } from 'src/models/compras/compra';
import { Cidade } from 'src/models/cidade';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'comprador-cadastrar',
    templateUrl: './comprador-cadastrar.html',
    styleUrls: ['./comprador-cadastrar.scss']
})

export class CompradorCadastrarComponent implements OnInit {

    comprador: Comprador = new Comprador();
    localizacao: Cidade[];

    constructor(public dialog: MatDialog,
                private router: Router,
                private compradorService: CompradorService,
                private compraService: CompraService,
                private _http: HttpClient
                ) {}

    ngOnInit(): void {
        this.comprador = this.compradorService.getCompradorParam();
        this.getCidade();
    }

    cadastrar(): void {
        if (this.comprador.id > 0) {
          this.compradorService.alterarComprador(this.comprador).subscribe(
            (comprador: Comprador) => {
              if (comprador.id > 0) {
                alert('Comprador alterado com sucesso');
                this.comprador = new Comprador();
              }
            }
          );
        } else {
            this.compradorService.inserirComprador(this.comprador).subscribe(
              (comprador: Comprador) => {
                if (comprador.id > 0) {
                  alert('Comprador cadastrado com sucesso!');
                  this.comprador = new Comprador();
                } else {
                  console.log('Erro');
                }
              },
              (error) => {
                console.log('Erro');
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
