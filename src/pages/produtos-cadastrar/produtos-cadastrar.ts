import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../../models/cidade';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/services/produto/produto.service';
import { Produto } from '../../models/producao/produto';
import { Custo } from '../../models/producao/custo';
import { Preco } from '../../models/producao/preco';

@Component({
  selector: 'produtos-cadastrar',
  templateUrl: './produtos-cadastrar.html',
  styleUrls: ['./produtos-cadastrar.scss']
})

export class ProdutosCadastrarComponent implements OnInit {
  // title = 'PI-Final';
  errMsg: string;

  public produto: Produto;

  constructor(public dialog: MatDialog,
              private _http: HttpClient,
              private router: Router,
              private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produto = this.produtoService.getProdutoParam();
    console.log(JSON.stringify(this.produto));
  }

  openDialog(): void {
  }

  public cadastrar(): void {
    console.log(JSON.stringify(this.produto));
        this._http.post('http://localhost:8080/pi/servicos/produto/inserir', this.produto)
        .subscribe(
          (produto: Produto) => {
            console.info('Produto retornado => ', produto);
            alert('Produto cadastrado com sucesso!');
            this.produto = new Produto();
          },
          (error) => {
            this.errMsg = JSON.stringify(error.message);
            alert('Usuário não cadastrado');
            this.produto = new Produto();
          }
        );
  }

  // public consultaPessoa(usuario: Pessoa): void {
  //   this._http.post('http://localhost:8080/pi/servicos/pessoa/cpf', usuario)
  //             .subscribe(
  //               (p: Pessoa) => {
  //                 console.log('RETORNO => ' , p);
  //                 console.log('RETORNO => ' , this.usuario);
  //                 this.usuario.idPessoa = p.idPessoa;
  //                 console.log(JSON.stringify(this.usuario));
  //                 this.usuarioService.inserirUsuario(this.usuario)
  //                 .subscribe(
  //                   (user: Usuario) => {
  //                         if (user.id > 0) {
  //                           console.log('Cadastrado');
  //                           alert('Cadastrado com sucesso');
  //                           this.router.navigate(['/home-page']);
  //                         } else {
  //                           console.log('Erro');
  //                         }
  //                       }
  //                 );
  //                 }, (error) => {
  //                   console.log(error);
  //                 }
  //             );
  // }

  }
