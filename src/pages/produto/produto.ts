import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'produto-page',
  templateUrl: './produto.html',
  styleUrls: ['./produto.scss']
})
export class ProdutoComponent {
  // title = 'PI-Final';
  constructor(public dialog: MatDialog,
    private router: Router ) { }

  goToConsultarProduto(): void {
    this.router.navigate(['/produto-consultar']);
  }
}
