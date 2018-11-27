import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario/usuario.service';

@Component({
  selector: 'page-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  // title = 'PI-Final';
  public usuario: Usuario = new Usuario();
  errMsg: string;
  constructor(private _http: HttpClient,
              private router: Router,
              private usuarioService: UsuarioService) {}

  public efetuarLogin() {

    this.usuarioService.signin(this.usuario)
    .subscribe(
      (user: Usuario) => {
        if (user.id > 0) {
          this.router.navigate(['/home-page']);
        } else {
          alert('Usuario ou Senha Incorretos');
        }
      },
      (error) => {
        this.errMsg = JSON.stringify(error.message);
        this.router.navigate(['/home-page']);
        // loading.dismiss();
        // this.showAlert(this.errMsg);
      }
    );
  }
}
