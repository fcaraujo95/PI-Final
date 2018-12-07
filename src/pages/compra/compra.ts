import { Component } from '@angular/core';
import { CompraService } from 'src/services/compras/compra.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Compra } from 'src/models/compras/compra';
import { CompraItemService } from 'src/services/produto/compraItem.service';
import { CompraItem } from 'src/models/compras/compraItem';

@Component({
  selector: 'compra-page',
  templateUrl: './compra.html',
  styleUrls: ['./compra.scss']
})
export class CompraComponent {
  // title = 'PI-Final';
  constructor(public dialog: MatDialog,
    private router: Router,
    private compraService: CompraService,
    private compraItemService: CompraItemService
    ) {}

    public goToCadastroCompra(): void {
      this.compraItemService.setCompraItemParam(new CompraItem);
      this.compraService.setCompraParam(new Compra());
      this.router.navigate(['/compra-cadastrar']);
    }

    public goToConsultarCompra(): void {

    }

}
