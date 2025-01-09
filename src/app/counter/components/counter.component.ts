import { Component } from "@angular/core";

@Component(
  {selector: 'app-counter',
    template: `<h3>

    Contador: {{counter}}
    </h3>

    <button (click)="increaseCounter()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="substractCounter()">-1</button>
    `,
    standalone: false
  }
)
export class CounterComponent {
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
