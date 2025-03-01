import { UpperCasePipe } from '@angular/common';
import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {

  name: WritableSignal<string> =  signal('Ironman');
  age: WritableSignal<number> = signal(45);

  heroDescription: Signal<string> = computed(() => {
    const description = `${ this.name() } - ${this.age()}`;
    return description;
  });

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('IronMan');
    this.age.set(45);
  }
}
