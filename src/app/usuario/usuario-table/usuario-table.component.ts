import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

interface Usuario {
  Id: number;
  Nome: string;
  Cpf: string;
  Rg: string;
  Email: string;
}

@Component({
  selector: 'app-usuario-table',
  templateUrl: './usuario-table.component.html'
})
export class UsuarioTableComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  usuarios = [];

  ngOnInit() {
    this.getAll();
  }

  async post() {
    await this.usuarioService.post({});
    this.getAll();
  }

  async getAll() {
    this.usuarios = await this.usuarioService.getAll();
  }

  async delete(id: number) {
    await this.usuarioService.delete(id).catch(erro => {
      alert(erro);
    });
    this.getAll();
  }
}
