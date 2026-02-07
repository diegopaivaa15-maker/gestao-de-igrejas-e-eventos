
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosStore } from '../membros/membros.store';
import { DoacoesStore } from '../doacoes/doacoes.store';
import { AvisosStore } from '../avisos/avisos.store';
import {EscalasStore} from '../escalas/escalas.store';

    @Component({
      selector: 'app-dashboard',
      standalone: true,
      imports: [CommonModule],
      templateUrl: './dashboard.html',
    })
    export class Dashboard {

      constructor(
        public membros: MembrosStore,
        public doacoes: DoacoesStore,
        public avisos: AvisosStore,
        public Escalas: EscalasStore
      ) {}

    }

// Injetando todos os stores
// Dashboard vira agregador de dados