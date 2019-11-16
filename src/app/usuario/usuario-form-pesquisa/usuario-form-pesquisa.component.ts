import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../usuario.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-usuario-form-pesquisa',
  templateUrl: './usuario-form-pesquisa.component.html',
  styleUrls: ['./usuario-form-pesquisa.component.css']
})
export class UsuarioFormPesquisaComponent implements OnInit {
  nome: string;
  usuarios = [];

  page = 1;
  pageSize = 4;
  collectionSize = this.usuarios.length;
  pages = [1];

  closeResult: string;

  constructor(
    private usuarioService: UsuarioService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    if (this.page > this.pages.length) {
      this.page = this.pages.length;
      return;
    }

    if (this.page < 1) {
      this.page = 1;
      return;
    }

    const filtros = {
      nome: this.nome,
      page: this.page,
      size: this.pageSize
    };

    await this.usuarioService.getAll(filtros).then(response => {
      this.usuarios = response.Content;
      this.collectionSize = response.TotalLength;

      this.pages = [];
      const totalPages = Math.ceil(this.collectionSize / this.pageSize);

      for (let i = 0; i < totalPages; i++) {
        this.pages.push(i + 1);
      }
    });
  }

  async delete(id: number) {
    await this.usuarioService
      .delete(id)
      .then(() => {
        this.getAll();
        this.toast.success('Usuário excluído');
      })
      .catch(message => this.toast.error(message));
  }
}
