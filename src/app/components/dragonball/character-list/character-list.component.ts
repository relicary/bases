import { Component, input, InputSignal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  listName: InputSignal<string> = input.required<string>();
  characters: InputSignal<Character[]> = input.required<Character[]>();

}
