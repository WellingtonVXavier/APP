import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent
  implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy 
  {
    text: string ="";

  ngOnInit(): void {
    // console.log('OnInit');
    this.text="Conteúdo Inicial"
  }

  ngOnDestroy() {
    // console.log('OnDestroy');
  }

  ngOnChanges() {
    // console.log('OnChanges');
  }

  ngDoCheck() {
    // console.log('DoCheck', this.text);
  }
  
  ngAfterContentInit() {
    // this.text= "conteúdo alterado após [ngAfterContentInit]";
    // console.log('AfterContentInit');
  }
  
  ngAfterContentChecked() {
    // this.text = "conteúdo alterado após [ngAfterContentChecked]";
    // console.log(this.text);
  }

  ngAfterViewChecked() {
    // console.log('AfterViewChecked');
  }

  ngAfterViewInit() {
    // this.text = "Conteúdo alterado após [ngAfterViewInit]";
    // console.log('AfterViewInit');
  }
}
