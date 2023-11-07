import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private shared: SharedService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    let logged: boolean = this.shared.isAutenticator();

    if (!logged) {
      this.router.navigate(['login']);
    }

    return logged;
  }
}
