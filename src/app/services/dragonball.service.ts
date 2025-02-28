import { Injectable, signal, WritableSignal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {

  constructor() { }

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000 },
    {id: 5, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(newCharacter: Character ) {
    this.characters.update( list => [...list, newCharacter]);
  }

}
