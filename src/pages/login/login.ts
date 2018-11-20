import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  // title = 'PI-Final';

  usuario: string;
  login: Usuario = new Usuario();
  senha: string;
  usuarioLogado: Usuario;
  errMsg: string;

  constructor(private _http: HttpClient,
              private router: Router) {}

  public efetuarLogin() {

    this.login.login = this.usuario;
    this.login.chave = this.senha;

    this._http.post('http://192.168.0.59:8080/pi/servicos/usuario/signin', this.login)
    .subscribe(
      (user: Usuario) =>{
        console.info('Logado! ', user);
        this.usuarioLogado = user;

        if(user.id > 0) {
          //navego pra proxima pagina
          this.router.navigate(['/home-page']);
        } else {
          alert("FALHA NO LOGIN");
        }
      },
      (error) => {
        this.errMsg = JSON.stringify(error.message);
        this.router.navigate(['/home-page']);
        // loading.dismiss();
        // this.showAlert(this.errMsg);
      }
    )

  }
}
