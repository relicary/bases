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
    {id: 1, name: 'Krilin', power: 2500 },
    {id: 1, name: 'Gohan', power: 9500 },
    {id: 1, name: 'Pikolo', power: 3000 },
    {id: 1, name: 'Vegeta', power: 8000 }
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })
}
