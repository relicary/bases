import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000 },
    {id: 2, name: 'Krilin', power: 2500 },
    {id: 3, name: 'Gohan', power: 9500 },
    {id: 4, name: 'Pikolo', power: 3000 },
    {id: 5, name: 'Vegeta', power: 8000 },
    {id: 6, name: 'Yamcha', power: 800 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })
}
