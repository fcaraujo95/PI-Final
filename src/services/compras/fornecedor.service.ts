import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from 'src/models/compras/fornecedor';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  private fornecedor: Fornecedor;
  private selecionar: string;

  constructor( private http: HttpClient) {}

  inserirFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/fornecedor/inserir', fornecedor);
  }

  alterarForncedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/fornecedor/alterar', fornecedor);
  }

  ativoInativo(fornecedor: Fornecedor): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/fornecedor/ativoInativo', fornecedor);
  }

  getFornecedores(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/fornecedor/lista');
  }

  getFornecedorNome(fornecedor: Fornecedor): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/fornecedor/nome', fornecedor);
  }

  getFornecedorId(fornecedor: Fornecedor): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/fornecedor/id', fornecedor);
  }

  getFornecedorParam() {
      return this.fornecedor;
  }

  setFornecedorParam(fornecedor: Fornecedor) {
    this.fornecedor = fornecedor;
  }

  getSelecionar(): string {
    return this.selecionar;
  }
  setSelecionar(selecionar: string) {
    this.selecionar = selecionar;
  }

}
