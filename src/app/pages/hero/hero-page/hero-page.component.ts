import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {

  name: WritableSignal<string> =  signal('Ironman');
  age: WritableSignal<number> = signal(45);

  getHeroDescription(): string {
    return `${ this.name() } - ${ this.age() }`;
  }

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
