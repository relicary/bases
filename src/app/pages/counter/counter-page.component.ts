import { Component } from "@angular/core";

@Component({
  template: `
    <h1>Counter {{ this.counter }}</h1>
    <button (click)="increaseBy(1)">+1</button>
  `
})
export class CounterPageComponent {

  counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

}
