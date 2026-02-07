import { Injectable, signal, computed } from '@angular/core';

export interface Doacao {
  id: number;
  valor: number;
  data: string;
}

@Injectable({ providedIn: 'root' })
export class DoacoesStore {

  doacoes = signal<Doacao[]>([
    { id: 1, valor: 100, data: '2026-01-01' },
    { id: 2, valor: 50, data: '2026-01-10' }
  ]);

  total = computed(() =>
    this.doacoes().reduce((s, d) => s + d.valor, 0)
  );

}

// Store de doações
// Computed total global