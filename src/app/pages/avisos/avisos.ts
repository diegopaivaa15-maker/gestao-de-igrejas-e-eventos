import { Component, computed, signal } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';

    interface Aviso{
      id: number;
      titulo: string;
      mensagem: string;
      data: string;
      importante: boolean;
    }


    @Component({
      selector: 'app-avisos',
      standalone: true,
      imports: [CommonModule, FormsModule],
      templateUrl: './avisos.html',
    })

    export class Avisos {
      avisos = signal<Aviso[]>([]);

      titulo = '';
      mensagem = '';
      data = '';
      importante = false;

        editarId: number | null = null;


     salvar() {
    if (!this.titulo || !this.mensagem || !this.data) return;

    if (this.editarId) {
      this.avisos.update(lista =>
        lista.map(a =>
          a.id === this.editarId
            ? {
                ...a,
                titulo: this.titulo,
                mensagem: this.mensagem,
                data: this.data,
                importante: this.importante
              }
            : a
        )
      );
    } else {
      this.avisos.update(lista => [
        ...lista,
        {
          id: Date.now(),
          titulo: this.titulo,
          mensagem: this.mensagem,
          data: this.data,
          importante: this.importante
        }
      ]);
    }

    this.limpar();
      }

      editar(aviso: Aviso) {
        this.editarId = aviso.id;
        this.titulo = aviso.titulo;
        this.mensagem = aviso.mensagem;
        this.data = aviso.data;
        this.importante = aviso.importante;
      }

      excluir(id: number) {
        this.avisos.update(lista =>
          lista.filter(a => a.id !== id)
        );
      }

      limpar() {
        this.titulo = '';
        this.mensagem = '';
        this.data = '';
        this.importante = false;
        this.editarId = null;
      }

      avisosImportantes = computed(() =>
        this.avisos().filter(a => a.importante)
      );
    }

//Criamos interface Aviso, Criamos interface Aviso
//Define o formato do comunicado, signal() para lista de avisos
//Estado reativo principal., Cria OU edita aviso.
// Cria OU edita aviso, editar()
// excluir(), excluir()
// Remove aviso da lista, computed avisosImportantes.
