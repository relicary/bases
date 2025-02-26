import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  selector: 'dragonball-super'
})
export class DragonballSuperPageComponent {

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000 },
    {id: 5, name: 'Vegeta', power: 8000 },
  ]);
}
