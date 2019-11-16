import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

class Usuario {
  Id: number;
  Nome: string;
  Cpf: string;
  Rg: string;
  Email: string;
  Endereco: Endereco;
  Telefone: Telefone;
}

class Endereco {
  Cep: string;
  Logradouro: string;
  Numero: number;
  Cidade: string;
  Estado: string;
}

class Telefone {
  Ddd: number;
  Numero: number;
  Tipo: TelefoneTipo;
}

class TelefoneTipo {
  Id: number;
  Nome: number;
}

@Component({
  selector: 'app-usuario-form-dados',
  templateUrl: './usuario-form-dados.component.html',
  styleUrls: ['./usuario-form-dados.component.css']
})
export class UsuarioFormDadosComponent implements OnInit {
  usuario = new Usuario();
  usuarios = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.usuario.Endereco = new Endereco();
    this.usuario.Telefone = new Telefone();
    this.usuario.Telefone.Tipo = new TelefoneTipo();
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.get(id);
      return;
    }
  }

  async get(id: number) {
    this.usuarioService
      .get(id)
      .then(response => {
        this.usuario = response.Content;
      })
      .catch(message => {
        alert(message);
      });
  }

  async save(form: NgForm) {
    if (this.usuario.Id) {
      await this.usuarioService.put(this.usuario);
    } else {
      await this.usuarioService.post(this.usuario);
    }

    form.reset();
  }
}
