import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  imports: [],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  selector: 'dragonball-super'
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000 },
    {id: 5, name: 'Vegeta', power: 8000 },
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
