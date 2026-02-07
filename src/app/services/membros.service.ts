import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Membro } from '../models/membro.model';

@Injectable({
  providedIn: 'root',
})
export class MembrosService {

  private nextId = 3;

  private membros$ = new BehaviorSubject<Membro[]>([
    { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '99999-1111', ativo: true },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', telefone: '98888-2222', ativo: true },
  ]);

  listar() {
    return this.membros$.asObservable();
  }

 adicionar(membro: Omit<Membro, 'id'>) {
    const novo: Membro = {
      ...membro,
      id: this.nextId++,
    };
     this.membros$.next([...this.membros$.value, novo]);
}

 excluir(id: number) {
    const novaLista = this.membros$.value.filter(m => m.id !== id);
    this.membros$.next(novaLista);
  }
}

// Manipulação de estado
// Imutabilidade
// Geração automática de ID
// Separação de responsabilidade


// Service Angular
// Observable (RxJS)
// Simulação de banco de dados
// Arquitetura desacoplada
