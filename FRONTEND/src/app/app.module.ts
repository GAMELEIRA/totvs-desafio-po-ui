import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { SuporteComponent } from './suporte/suporte.component';
import { DesenvolvedorComponent } from './desenvolvedor/desenvolvedor.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TarefasComponent } from './tarefas/tarefas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabecalhoComponent,
    FooterComponent,
    CadastroUsuarioComponent,
    SuporteComponent,
    DesenvolvedorComponent,
    TarefasComponent,
    PerfilComponent,
    MenuLateralComponent,
    CadastroTarefaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TarefasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
