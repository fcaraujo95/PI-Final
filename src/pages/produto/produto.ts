import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'produto-page',
  templateUrl: './produto.html',
  styleUrls: ['./produto.scss']
})
export class ProdutoComponent {
  // title = 'PI-Final';

  constructor(public dialog: MatDialog,
    private _http: HttpClient,
    private router: Router,
    private usuarioService: UsuarioService,
    private parametro: ActivatedRoute) { }

  public goToCadastroUsuario(): void {
    this.router.navigate(['/produtos-cadastrar']);
  }
}
