import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Usuario } from '../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario/usuario.service';


@Component({
  selector: 'usuario-consultar',
  templateUrl: './usuario-consultar.html',
  styleUrls: ['./usuario-consultar.scss']
})

export class UsuarioConsultarComponent implements OnInit {
  // title = 'PI-Final';
  errMsg: string;
  usuarios: Usuario[] = [];

  constructor(public dialog: MatDialog,
              private _http: HttpClient,
              private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
        (usuarios: Usuario[]) => {
            this.usuarios = usuarios;
        }
    );
  }

  goToCadastro(usuario: Usuario) {
    this.router.navigate(['/usuario-cadastrar'], {queryParams: usuario});
  }
}
