import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembrosService } from '../../services/membros.service';
import { Membro } from '../../models/membro.model';

@Component({
  selector: 'app-membros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './membros.html',
})
export class Membros implements OnInit {

  membros: Membro[] = [];
  form!: FormGroup;

  constructor(
    private membrosService: MembrosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
    });

    this.membrosService.listar().subscribe(dados => {
      this.membros = dados;
    });
  }

  adicionar() {
    if (this.form.invalid) return;

    this.membrosService.adicionar({
      ...this.form.value,
      ativo: true
    } as any);

    this.form.reset();
  }

  excluir(id: number) {
    this.membrosService.excluir(id);
  }
}

// Reactive Forms
// Validators
// FormBuilder
// Binding de formulário
// Binding de formulário
