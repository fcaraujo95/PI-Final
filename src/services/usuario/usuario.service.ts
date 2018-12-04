import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario;

  constructor( private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:8080/pi/servicos/usuario/lista');
  }

  getUsuarioId(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/usuario/id', usuario);
  }

  inserirUsuario(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/usuario/inserir', usuario);
  }

  alterarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put('http://localhost:8080/pi/servicos/usuario/alterar', usuario);
  }

  getUsuarioCpf(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/usuario/cpf', usuario);
  }

  signin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:8080/pi/servicos/usuario/signin', usuario);
  }

  getUsuarioParam() {
    return this.usuario;
  }

  setUsuarioParam(usuario: Usuario) {
    this.usuario = usuario;
  }
}

