import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name: WritableSignal<string> = signal('');
  power: WritableSignal<number> = signal(0);

  newCharacter: OutputEmitterRef<Character> = output<Character>();

  addCharacter() {

    if ( !this.name() || ! this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
