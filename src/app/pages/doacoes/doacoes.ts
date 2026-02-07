import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

    interface Doacao{
      id: number;
        nome: string;
          valor: number;
            data: string;
    }

    @Component({
      selector: 'app-doacoes',
        standalone: true,
          imports: [CommonModule, FormsModule],
            templateUrl: './doacoes.html',

    })
    export class Doacoes {
      doacoes = signal<Doacao[]>([]);

        nome = '';
        valor: number | null = null;
        data ='';

          filtroInicio = '';
          filtroFim = '';

          adicionar(){
          if (!this.nome || !this.valor || !this.data) return;

          this.doacoes.update(lista =>[
            ...lista,

            {
            id: Date.now(),
            nome: this.nome,
            valor: this.valor!,
            data: this.data
            }
          ]);

          this.nome = '';
          this.valor = null;
          this.data = '';
          }

          excluir(id: number){
              this.doacoes.update(lista =>
                lista.filter(d => d.id !== id)
              );
          }

          doacoesFiltradas = computed(() => {
          return this.doacoes().filter(d => {
          if (!this.filtroInicio || !this.filtroFim) return true;
          return d.data >= this.filtroInicio && d.data <= this.filtroFim;
        });
        });

        total = computed(() =>
        this.doacoesFiltradas()
          .reduce((soma, d) => soma + d.valor, 0)
      );
    }

    // Criamos a estrutura de dados (interface Doacao)
    // Usamos signal() para guardar as doações
    // Método adicionar(), Adiciona uma nova doação na lista.
    // Método excluir(), Remove uma doação pelo ID
    // Remove uma doação pelo ID, computed() — doacoesFiltradas
    // computed() — total, computed() — total
