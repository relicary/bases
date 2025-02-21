import { Component, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {

  counter: number = 10;
  counterSignal: WritableSignal<number> = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    // this.counterSignal.set( this.counterSignal() + value );
    this.counterSignal.update( currentValue => currentValue + value );
  }

  reset(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
