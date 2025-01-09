import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera App de Angular';
  public counter: number = 0;

  increaseCounter(){
    this.counter++;
  }

  substractCounter(){
    this.counter--;
  }

  resetCounter(){
    this.counter = 10;
  }
}
