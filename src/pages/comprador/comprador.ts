import { Component } from '@angular/core';
import { Comprador } from 'src/models/compras/comprador';
import { Router } from '@angular/router';
import { CompradorService } from 'src/services/compras/comprador.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'comprador-page',
  templateUrl: './comprador.html',
  styleUrls: ['./comprador.scss']
})
export class CompradorComponent {
  // title = 'PI-Final';
  constructor(public dialog: MatDialog,
    private router: Router,
    private compradorService: CompradorService
    ) {}

    public goToCadastroComprador(): void {
      this.compradorService.setSelecionar('');
      this.compradorService.setCompradorParam(new Comprador());
      this.router.navigate(['/comprador-cadastrar']);
    }

    public goToConsultarComprador(): void {
      this.compradorService.setSelecionar('');
      this.router.navigate(['/comprador-consultar']);
    }

}
