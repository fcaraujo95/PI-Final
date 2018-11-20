import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Usuario } from '../../models/usuario';
import { Pessoa } from '../../models/pessoa';
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../../models/cidade';
import { Router } from '@angular/router';

@Component({
  selector: 'consulta-usuario',
  templateUrl: './consulta-usuario.html',
  styleUrls: ['./consulta-usuario.scss']
})
export class ConsultaUsuarioDialog implements OnInit {
  // title = 'PI-Final';
  errMsg: string;
  localizacao: Cidade[] = [];

  public usuario: Usuario = new Usuario();
  // public pessoa: Pessoa = new Usuario();

  constructor(public dialog: MatDialog,
              private _http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.usuario.cidade = new Cidade();
    console.log('ONNINTINT');
    this.getCidade();
  }

  openDialog(): void {
  }

  cadastrar(): void {
    // this.usuario.dataDeNascimento = this.usuario.dataDeNascimento.replace("-", "");
    console.log(JSON.stringify(this.usuario));
    this._http.post('http://192.168.0.59:8080/pi/servicos/usuario/cpf', this.usuario)
              .subscribe(
                (usuario: Usuario) => {
                  console.log('Return value of consultaUsuario ');
                  if(usuario.id > 0) {
                    alert('JÁ EXISTE');
                    console.log('Usuario existe');
                    return false;
                  } else {
                    this.consultaPessoa(this.usuario);
                  }
                }
              )
  }

  public inserirUsuario(usuario: Usuario): void {
        this._http.post('http://192.168.0.59:8080/pi/servicos/usuario/inserir', usuario)
        .subscribe(
          (user: Usuario) =>{
            if(user.id > 0) {
              console.log('Cadastrado');
              this.router.navigate(['/home-page'])
            } else {
              console.info('Erro');
            }
          },
          (error) => {
            this.errMsg = JSON.stringify(error.message);
          }
        )
  }

  public consultaPessoa(usuario: Pessoa): void {
    this._http.post('http://192.168.0.59:8080/pi/servicos/pessoa/cpf', usuario)
              .subscribe(
                (p: Pessoa) => {
                  console.log('RETORNO => ' , p);
                  this.usuario.idPessoa = p.idPessoa;
                  for(let i = 0; i <= 1; i++) {
                    this.usuario.dataDeNascimento = this.usuario.dataDeNascimento.replace("-", "");
                  }
                  this.usuario.cidade = new Cidade();
                  console.log(JSON.stringify(this.usuario));
                  this.usuario.cidade.id = 1;
                  this.inserirUsuario(this.usuario);
                }, (error) => {
                  console.log(error);
                }
              )
  }

  getCidade() {
    this._http.get('http://192.168.0.59:8080/pi/servicos/cidade/lista')
    .subscribe(
      (cidade: Cidade[]) =>{
        console.info('Cidade! ', cidade);
        this.localizacao = cidade;
        console.log(this.localizacao);
        // this.usuarioLogado = user;
      },
      (error) => {
        this.errMsg = JSON.stringify(error.message);
        console.log('errooooo', error);
        // this.router.navigate(['/home-page']);
        // loading.dismiss();
        // this.showAlert(this.errMsg);
      }
    )

  }


}
