import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoFormPesquisaComponent } from './medico-form-pesquisa/medico-form-pesquisa.component';
import { MedicoFormDadosComponent } from './medico-form-dados/medico-form-dados.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MedicoRoutingModule } from './medico-routing.module';

@NgModule({
  declarations: [MedicoFormPesquisaComponent, MedicoFormDadosComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    CurrencyMaskModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule {}
