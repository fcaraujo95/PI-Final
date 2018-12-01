import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/producao/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private produto: Produto;

  constructor( private http: HttpClient) {}

  getProdutos(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/produto/listaAtual');
  }

  getProdutoId(produto: Produto): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/produto/id', produto);
  }

  inserirProduto(produto: Produto): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/produto/inserir', produto);
  }

  alterarProduto(produto: Produto): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/produto/alterar', produto);
  }

  ativoInativo(produto: Produto): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/produto/ativoInativo', produto);
  }

  getProdutoParam() {
      return this.produto;
  }

  setProdutoParam(produto: Produto) {
    this.produto = produto;
  }

}

