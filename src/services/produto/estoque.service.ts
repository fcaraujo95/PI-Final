import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estoque } from 'src/models/producao/estoque';

@Injectable({
  providedIn: 'root'
})

export class EstoqueService {

  private estoque: Estoque;

  constructor( private http: HttpClient) {}

  getEstoques(estoque: Estoque): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/estoque/produto', estoque);
  }

  getEstoqueId(estoque: Estoque): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/estoque/id', estoque);
  }

  inserirEstoque(estoque: Estoque): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/estoque/inserir', estoque);
  }

  alterarEstoque(estoque: Estoque): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/estoque/alterar', estoque);
  }

  getEstoqueParam() {
      return this.estoque;
  }

  setEstoqueParam(estoque: Estoque) {
    this.estoque = estoque;
  }

}

