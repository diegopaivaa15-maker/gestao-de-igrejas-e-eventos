import {Injectable, signal} from '@angular/core';

    export interface Membro{
      id: number;
      nome: string;
      contato: string;
    }

    @Injectable({ providedIn: 'root' })
    export class MembrosStore {

      membros = signal<Membro[]>([
        { id: 1, nome: 'João', contato: '9999-1111' },
        { id: 2, nome: 'Maria', contato: '9999-2222' }
      ]);

    }

    // Criamos um store global de membros
    // Dados ficam acessíveis para qualquer página
    // Dados ficam acessíveis para qualquer página