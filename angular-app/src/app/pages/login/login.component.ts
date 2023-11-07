import { SharedService } from './../../shared/shared.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  mensagemLogin: string = "";

  constructor(
    private router: Router,
    private shared: SharedService) {
  }

  btnLogin(): void {
    if (this.username == "admin" && this.username == "admin") {
      this.shared.setUsername(this.username);
      this.router.navigate(["home"]);
    } else {
      this.mensagemLogin = "Usuário e/ou senha estão inválidos!";
    }
  }
}

