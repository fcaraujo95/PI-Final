import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comprador } from 'src/models/compras/comprador';

@Injectable({
  providedIn: 'root'
})

export class CompradorService {

  private comprador: Comprador;

  private selecionar: string;

  constructor( private http: HttpClient) {}

  inserirComprador(comprador: Comprador): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/comprador/inserir', comprador);
  }

  alterarComprador(comprador: Comprador): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/comprador/alterar', comprador);
  }

  ativoInativo(comprador: Comprador): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/comprador/ativoInativo', comprador);
  }

  getCompradores(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/comprador/lista');
  }

  getCompradorNome(comprador: Comprador): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/comprador/nome', comprador);
  }

  getCompradorId(comprador: Comprador): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/comprador/id', comprador);
  }

  getCompradorParam() {
      return this.comprador;
  }

  setCompradorParam(comprador: Comprador) {
    this.comprador = comprador;
  }

  getSelecionar(): string {
    return this.selecionar;
  }
  setSelecionar(selecionar: string) {
    this.selecionar = selecionar;
  }

}


