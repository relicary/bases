import { Component, signal, WritableSignal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name: WritableSignal<string> = signal('');
  power: WritableSignal<number> = signal(0);

  addCharacter() {

    if ( !this.name() || ! this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: 1000,
      name: this.name(),
      power: this.power()
    }

    // this.characters.update( (list) => [...list, newCharacter])
    console.log(newCharacter)
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
