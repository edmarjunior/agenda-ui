import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [UsuarioModule],
  exports: [NavbarComponent]
})
export class CoreModule {}
