import { Component } from '@angular/core';
import { ProdutoService } from 'src/services/produto/produto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Produto } from 'src/models/producao/produto';

@Component({
  selector: 'estoque-page',
  templateUrl: './estoque.html',
  styleUrls: ['./estoque.scss']
})
export class EstoqueComponent {
  // title = 'PI-Final';
  constructor(public dialog: MatDialog,
    private router: Router,
    private produtoService: ProdutoService
    ) {}

    public goToCadastroEstoque(): void {
      this.produtoService.setSelecionar('');
      this.produtoService.setProdutoParam(new Produto());
      this.router.navigate(['/estoque-cadastrar']);
    }

    // public goToCadastroRecebimento(): void {
    //   this.produtoService.setSelecionar('');
    //   this.router.navigate(['/recebimento-cadastrar']);
    // }
}
