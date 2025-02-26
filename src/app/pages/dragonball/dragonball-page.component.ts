import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000 },
    // {id: 2, name: 'Krilin', power: 2500 },
    // {id: 3, name: 'Gohan', power: 9500 },
    // {id: 4, name: 'Pikolo', power: 3000 },
    // {id: 5, name: 'Vegeta', power: 8000 },
    // {id: 6, name: 'Yamcha', power: 800 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })

  addCharacter() {
    if ( !this.name() || ! this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update( (list) => [...list, newCharacter])
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
