import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsultaUsuarioDialog } from '../../dialogs/consulta-usuario/consulta-usuario';
import { Router } from '@angular/router';

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
    this.router.navigate(['/consulta-usuario']);
  }

}
