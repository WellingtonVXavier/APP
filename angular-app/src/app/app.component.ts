import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  showFiller = false;
  isAuth: boolean = false;

  constructor(private shared: SharedService) {

  }

  ngOnInit(): void {
    this.shared.getUsername().subscribe((retorno: string) => {
      if (retorno) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

}
