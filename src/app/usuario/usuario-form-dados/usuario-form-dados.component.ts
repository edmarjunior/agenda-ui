import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

class Endereco {
  cep: string;
  logradouro: string;
  numero: number;
  cidade: string;
  estado: string;
}

class Telefone {
  ddd: number;
  numero: number;
  tipo: number;
}

class Usuario {
  nome: string;
  cpf: string;
  rg: string;
  email: string;
  endereco: Endereco;
  telefone: Telefone;
}

@Component({
  selector: 'app-usuario-form-dados',
  templateUrl: './usuario-form-dados.component.html',
  styleUrls: ['./usuario-form-dados.component.css']
})
export class UsuarioFormDadosComponent implements OnInit {
  estado = 'SP';
  usuario = new Usuario();
  endereco = new Endereco();
  telefone = new Telefone();

  usuarios = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    // this.usuarioService.consultar().then(data => {
    //   console.log(data);
    //   this.usuarios = data;
    // });
  }

  salvar(form: NgForm) {
    this.endereco.cep = form.value.cep;
    this.endereco.logradouro = form.value.logradouro;
    this.endereco.numero = form.value.numero;
    this.endereco.cidade = form.value.cidade;
    this.endereco.estado = form.value.estado;

    this.telefone.ddd = form.value.ddd;
    this.telefone.numero = form.value.telefone;
    this.telefone.tipo = form.value.tipo;

    this.usuario.nome = form.value.nome;
    this.usuario.cpf = form.value.cpf;
    this.usuario.rg = form.value.rg;
    this.usuario.email = form.value.email;
    this.usuario.endereco = this.endereco;
    this.usuario.telefone = this.telefone;

    // this.usuarioService.adicionar(this.usuario.nome);

    form.reset();
  }
}
