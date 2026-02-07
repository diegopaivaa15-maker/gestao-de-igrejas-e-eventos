import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Membro{
  id: number;
  nome: string;
}

interface Escala{
  id: number;
  titulo: string;
  data: string;
  membros: number[];
}



interface Membro {
  id: number;
  nome: string;
}

interface Escala {
  id: number;
  titulo: string;
  data: string;
  membrosIds: number[];
}

@Component({
  selector: 'app-escalas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './escalas.html',
})
export class Escalas {

  // Simulação de membros cadastrados
  membros = signal<Membro[]>([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Pedro' },
  ]);

  // Lista de escalas
  escalas = signal<Escala[]>([]);

  // Formulário
  titulo = '';
  data = '';
  membrosSelecionados: number[] = [];

  adicionarEscala() {
    if (!this.titulo || !this.data) return;

    this.escalas.update(lista => [
      ...lista,
      {
        id: Date.now(),
        titulo: this.titulo,
        data: this.data,
        membrosIds: this.membrosSelecionados,
        membros: []
      }
    ]);

    // Limpa formulário
    this.titulo = '';
    this.data = '';
    this.membrosSelecionados = [];
  }

  excluirEscala(id: number) {
    this.escalas.update(lista =>
      lista.filter(e => e.id !== id)
    );
  }

  nomeMembro(id: number) {
    return this.membros().find(m => m.id === id)?.nome || '';
  }
}
