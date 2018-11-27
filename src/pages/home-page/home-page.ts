import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePageComponent {
  // title = 'PI-Final';

  constructor(public dialog: MatDialog,
              private router: Router ) { }

  goToCadastroUsuario(): void {
    this.router.navigate(['/usuario-cadastrar'], {queryParams: new Usuario()});
    // this.router.navigate(['/usuario-cadastrar']);
  }

  goToConsultarUsuario(): void {
    this.router.navigate(['/usuario-consultar']);
  }

}
