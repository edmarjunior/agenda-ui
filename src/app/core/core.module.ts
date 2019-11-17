import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { UsuarioService } from '../usuario/usuario.service';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  imports: [UsuarioModule, AppRoutingModule],
  exports: [NavbarComponent],
  providers: [Title, UsuarioService, { provide: 'logPrefix', useValue: 'LOG2' }]
})
export class CoreModule {}
