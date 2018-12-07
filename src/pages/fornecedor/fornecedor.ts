import { Component } from '@angular/core';
import { FornecedorService } from 'src/services/compras/fornecedor.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Fornecedor } from 'src/models/compras/fornecedor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fornecedor-page',
  templateUrl: './fornecedor.html',
  styleUrls: ['./fornecedor.scss']
})

export class FornecedorComponent {
  // title = 'PI-Final';
  constructor(public dialog: MatDialog,
    private _http: HttpClient,
    private router: Router,
    private fornecedorService: FornecedorService) { }

    public goToCadastroFornecedor(): void {
      this.fornecedorService.setSelecionar('');
      this.fornecedorService.setFornecedorParam(new Fornecedor());
      // this.router.navigate(['/fornecedor-cadastrar']);
    }

    public goToConsultarProduto(): void {
      this.fornecedorService.setSelecionar('');
      this.router.navigate(['/fornecedor-consultar']);
    }
}
