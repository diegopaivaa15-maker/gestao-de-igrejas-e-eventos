import { Routes } from '@angular/router';
import { Layout} from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [

      {
      path: 'dashboard',
      loadComponent: () =>
      import('./pages/dashboard/dashboard')
      .then(m => m.Dashboard)
    },
      {
        path: 'membros',
        loadComponent: () =>
          import('./pages/membros/membros')
            .then(m => m.Membros)
      },
      {
        path: 'escalas',
        loadComponent: () =>
          import('./pages/escalas/escalas')
            .then(m => m.Escalas)
      },
      {
        path: 'doacoes',
        loadComponent: () =>
          import('./pages/doacoes/doacoes')
            .then(m => m.Doacoes)
      },
      {
        path: 'avisos',
        loadComponent: () =>
          import('./pages/avisos/avisos')
            .then(m => m.Avisos)
      },
      {
        path: '',
        redirectTo: 'membros',
        pathMatch: 'full'
      }
    ]
  }
];

// Passando rotas