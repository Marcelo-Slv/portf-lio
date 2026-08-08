import { Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato';
import { FormacaoComponent } from './pages/formacao/formacao';
import { HabilidadesComponent } from './pages/habilidades/habilidades';
import { HomeComponent } from './pages/home/home';
import { ProjetosComponent } from './pages/projetos/projetos';
import { SobreComponent } from './pages/sobre/sobre';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Marcelo Expedito · Desenvolvedor de Software',
  },
  { path: 'sobre', component: SobreComponent, title: 'Sobre · Marcelo Expedito' },
  { path: 'habilidades', component: HabilidadesComponent, title: 'Habilidades · Marcelo Expedito' },
  { path: 'formacao', component: FormacaoComponent, title: 'Formação · Marcelo Expedito' },
  { path: 'projetos', component: ProjetosComponent, title: 'Projetos · Marcelo Expedito' },
  { path: 'contato', component: ContatoComponent, title: 'Contato · Marcelo Expedito' },
  { path: '**', redirectTo: '' },
];
