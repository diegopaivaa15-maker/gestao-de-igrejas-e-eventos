import { Injectable, signal, computed } from '@angular/core';

export interface Aviso {
  id: number;
  titulo: string;
  data: string;
  importante: boolean;
}

@Injectable({ providedIn: 'root' })
export class AvisosStore {

  avisos = signal<Aviso[]>([
    { id: 1, titulo: 'Ensaio sábado', data: '2026-02-10', importante: true },
    { id: 2, titulo: 'Reunião líderes', data: '2026-02-15', importante: false }
  ]);

  recentes = computed(() =>
    [...this.avisos()]
      .sort((a,b) => b.data.localeCompare(a.data))
      .slice(0, 3)
  );

}

// Store de avisos
// Lista ordenada por data


