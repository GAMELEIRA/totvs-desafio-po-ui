import { TarefasComponent } from './tarefas/tarefas.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { SuporteComponent } from './suporte/suporte.component';
import { LoginComponent } from './login/login.component';
import { DesenvolvedorComponent } from './desenvolvedor/desenvolvedor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'acesso'
  }, {
    path: 'acesso',
    component: LoginComponent
  }, {
    path: 'suporte',
    component: SuporteComponent
  }, {
    path: 'desenvolvedor',
    component: DesenvolvedorComponent
  }, {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  }, {
    path: 'tarefas',
    component: TarefasComponent
  }, {
    path: 'cadastro-tarefas',
    component: CadastroTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
