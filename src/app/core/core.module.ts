import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormPesquisaComponent } from '../usuario/usuario-form-pesquisa/usuario-form-pesquisa.component';
import { UsuarioFormDadosComponent } from '../usuario/usuario-form-dados/usuario-form-dados.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioFormPesquisaComponent },
  { path: 'usuarios/novo', component: UsuarioFormDadosComponent },
  { path: 'usuarios/:id', component: UsuarioFormDadosComponent }
];

@NgModule({
  declarations: [NavbarComponent],
  imports: [UsuarioModule, RouterModule.forRoot(routes)],
  exports: [NavbarComponent]
})
export class CoreModule {}
