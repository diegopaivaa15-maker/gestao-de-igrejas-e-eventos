import { Injectable, signal, computed } from '@angular/core';

export interface Escala {
  id: number;
  ministerio: string;
  data: string;
}

@Injectable({ providedIn: 'root' })
export class EscalasStore {

  escalas = signal<Escala[]>([
    { id: 1, ministerio: 'Louvor', data: '2026-02-12' },
    { id: 2, ministerio: 'Recepção', data: '2026-02-20' }
  ]);

  proximas = computed(() =>
    [...this.escalas()]
      .sort((a,b) => a.data.localeCompare(b.data))
      .slice(0, 3)
  );

}

//  store de escalas
// proximas datas ordenadas