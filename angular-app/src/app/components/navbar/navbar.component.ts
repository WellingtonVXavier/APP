import { SharedService } from './../../shared/shared.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() Drawer: any;
  usuarioLogado: string = "";

  constructor(private shared: SharedService) {
    this.shared.getUsername().subscribe((retorno: string) =>{
      this.usuarioLogado = retorno;
    });
  }

  showMenu() {
    this.Drawer.toggle();
  }
}
