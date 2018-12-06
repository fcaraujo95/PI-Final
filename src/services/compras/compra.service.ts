import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Compra } from 'src/models/compras/compra';
import { Comprador } from 'src/models/compras/comprador';
import { Fornecedor } from 'src/models/compras/fornecedor';

@Injectable({
  providedIn: 'root'
})

export class CompraService {

  private compra: Compra;

  constructor( private http: HttpClient) {}

  inserirCompra(compra: Compra): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/compra/inserir', compra);
  }

  alterarCompra(compra: Compra): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/compra/alterar', compra);
  }

  getCompras(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/compra/lista');
  }

  getComprasComprador(comprador: Comprador): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/compra/comprador', comprador);
  }

  getComprasFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/compra/fornecedor', fornecedor);
  }

  getComprasRecebidas(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/compra/recebidas');
  }

  getComprasNaoRecebidas(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/compra/naorecebidas');
  }

  getCompraNome(compra: Compra): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/compra/nome', compra);
  }

  getCompraId(compra: Compra): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/compra/id', compra);
  }

  getCompraParam() {
      return this.compra;
  }

  setCompraParam(compra: Compra) {
    this.compra = compra;
  }

}


