import { OnInit, Component } from '@angular/core';
import { Comprador } from 'src/models/compras/comprador';
import { CompradorService } from 'src/services/compras/comprador.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CompraService } from 'src/services/compras/compra.service';
import { Compra } from 'src/models/compras/compra';

@Component({
    selector: 'comprador-cadastrar',
    templateUrl: './comprador-cadastrar.html',
    styleUrls: ['./comprador-cadastrar.scss']
})

export class CompradorCadastrarComponent implements OnInit {

    comprador: Comprador = new Comprador();

    constructor(public dialog: MatDialog,
                private router: Router,
                private compradorService: CompradorService,
                private compraService: CompraService
                ) {}

    ngOnInit(): void {
        // this.getCompradores();

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
                // this.getCompradores();
            }, (error) => {
                console.log(JSON.stringify(error.message));
              }
        );
      }
}
