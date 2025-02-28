import { effect, EffectRef, Injectable, signal, WritableSignal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {

  const characters = localStorage.getItem('characters');
  return  characters ? JSON.parse(characters) : [];

}

@Injectable({providedIn: 'root'})
export class DragonballService {

  constructor() { }

  characters: WritableSignal<Character[]> = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage: EffectRef = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character ) {
    this.characters.update( list => [...list, newCharacter]);
  }

}
