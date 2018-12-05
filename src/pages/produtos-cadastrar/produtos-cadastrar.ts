import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Usuario } from '../../models/usuario';
import { Pessoa } from '../../models/pessoa';
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../../models/cidade';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/services/usuario/usuario.service';

@Component({
  selector: 'produtos-cadastrar',
  templateUrl: './produtos-cadastrar.html',
  styleUrls: ['./produtos-cadastrar.scss']
})

export class ProdutosCadastrarComponent implements OnInit {
  // title = 'PI-Final';
  errMsg: string;
  localizacao: Cidade[] = [];

  public usuario: Usuario = new Usuario();
  // public pessoa: Pessoa = new Usuario();

  constructor(public dialog: MatDialog,
              private _http: HttpClient,
              private router: Router,
              private usuarioService: UsuarioService,
              private parametro: ActivatedRoute) { }

  ngOnInit() {

    // this.getCidade();

    this.parametro.queryParams.subscribe(
      (usuario: Usuario) => {
        console.log(JSON.stringify(usuario));
        console.log('Parametro');
        let user: Usuario = new Usuario();
        user.id = usuario.id;
        console.log(JSON.stringify(user));
        this.usuarioService.getUsuarioId(user).subscribe(
          (usuario: Usuario) =>{
            this.usuario = usuario
            console.log(this.usuario);
            console.log('Giovanni');
          }
        );
      },
      (error) => {
        this.errMsg = JSON.stringify(error.message);
        console.log('errooooo', error);
      }
      );
  }

  openDialog(): void {
  }

  cadastrar(): void {
    // this.usuario.dataDeNascimento = this.usuario.dataDeNascimento.replace("-", "");

    console.log(JSON.stringify(this.usuario));
    if (this.usuario.id > 0) {
      console.log('Alterar');
      this.usuarioService.alterarUsuario(this.usuario).subscribe(
        (usuario: Usuario) => {
          console.log(usuario);
          if (usuario.id > 0) {
            alert('Alterado com sucesso');
            this.router.navigate(['/home-page']);
          }
        }
      );
    } else {
      console.log(this.usuario.cidade);
      this.usuarioService.getUsuarioCpf(this.usuario)
              .subscribe(
                (usuario: Usuario) => {
                  console.log('Return value of consultaUsuario ');
                  if (usuario.id > 0) {
                    alert('JÁ EXISTE');
                    console.log('Usuario existe');
                    return false;
                  } else {
                    this.consultaPessoa(this.usuario);
                  }
                }
              );
    }
  }

  public inserirUsuario(usuario: Usuario): void {
        this._http.post('http://localhost:8080/pi/servicos/usuario/inserir', usuario)
        .subscribe(
          (user: Usuario) => {
            if (user.id > 0) {
              console.log('Cadastrado');
              this.router.navigate(['/home-page']);
            } else {
              console.log('Erro');
            }
          },
          (error) => {
            this.errMsg = JSON.stringify(error.message);
          }
        );
  }

  public consultaPessoa(usuario: Pessoa): void {
    this._http.post('http://localhost:8080/pi/servicos/pessoa/cpf', usuario)
              .subscribe(
                (p: Pessoa) => {
                  console.log('RETORNO => ' , p);
                  console.log('RETORNO => ' , this.usuario);
                  this.usuario.idPessoa = p.idPessoa;
                  console.log(JSON.stringify(this.usuario));
                  this.usuarioService.inserirUsuario(this.usuario)
                  .subscribe(
                    (user: Usuario) => {
                          if (user.id > 0) {
                            console.log('Cadastrado');
                            alert('Cadastrado com sucesso');
                            this.router.navigate(['/home-page']);
                          } else {
                            console.log('Erro');
                          }
                        }
                  );
                  }, (error) => {
                    console.log(error);
                  }
              );
  }

  getCidade() {
    this._http.get('http://localhost:8080/pi/servicos/cidade/lista')
    .subscribe(
      (cidade: Cidade[]) => {
        console.log('Cidade! ', cidade);
        this.localizacao = cidade;
        console.log(this.localizacao);
      },
      (error) => {
        this.errMsg = JSON.stringify(error.message);
        console.log('errooooo', error);
        // this.router.navigate(['/home-page']);
        // loading.dismiss();
        // this.showAlert(this.errMsg);
      }
    );

  }
}
