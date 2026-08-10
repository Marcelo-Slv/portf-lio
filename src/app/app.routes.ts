import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
    pathMatch: 'full',
    title: 'Marcelo Expedito · Desenvolvedor de Software',
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.SobreComponent),
    title: 'Sobre · Marcelo Expedito',
  },
  {
    path: 'habilidades',
    loadComponent: () =>
      import('./pages/habilidades/habilidades').then((m) => m.HabilidadesComponent),
    title: 'Habilidades · Marcelo Expedito',
  },
  {
    path: 'formacao',
    loadComponent: () => import('./pages/formacao/formacao').then((m) => m.FormacaoComponent),
    title: 'Formação · Marcelo Expedito',
  },
  {
    path: 'projetos',
    loadComponent: () => import('./pages/projetos/projetos').then((m) => m.ProjetosComponent),
    title: 'Projetos · Marcelo Expedito',
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato').then((m) => m.ContatoComponent),
    title: 'Contato · Marcelo Expedito',
  },
  { path: '**', redirectTo: '' },
];
