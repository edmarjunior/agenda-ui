import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface UsuarioFiltros {
  nome: string;
  page: number;
  size: number;
}

export interface Usuario {
  Id: number;
  Nome: string;
  Cpf: string;
  Rg: string;
  Email: string;
  Endereco: Endereco;
  Telefone: Telefone;
}

export interface Endereco {
  Cep: string;
  Logradouro: string;
  Numero: number;
  Cidade: string;
  Estado: string;
}

export interface Telefone {
  Ddd: number;
  Numero: number;
  Tipo: TelefoneTipo;
}

export interface TelefoneTipo {
  Id: number;
  Nome: number;
}

@Injectable()
export class UsuarioService {
  private baseUrl = 'https://agenda-api.azurewebsites.net/api/usuarios';

  constructor(
    private http: HttpClient,
    @Inject('logPrefix') private logPrefix: string
  ) {}

  async post(usuario: Usuario): Promise<any> {
    return await this.http.post(this.baseUrl, usuario).toPromise();
  }

  async getAll(filtros: UsuarioFiltros): Promise<any> {
    // const headers = new Headers();

    const params = new HttpParams()
      .set('nome', filtros.nome || '')
      .set('page', filtros.page.toString())
      .set('size', filtros.size.toString());

    const response = this.http.get(this.baseUrl, { params }).toPromise();
    return response;
  }

  async get(id: number): Promise<any> {
    return await this.http
      .get(`${this.baseUrl}/${id}`)
      .toPromise()
      .catch(response => {
        return Promise.reject(
          `Operação não realizada: ${response.Messages[0]}`
        );
      });
  }

  async delete(id: number): Promise<void> {
    await this.http
      .delete(`${this.baseUrl}/${id}`)
      .toPromise()
      .catch(response => {
        return Promise.reject(response.Messages[0]);
      });
  }

  async put(usuario: Usuario): Promise<any> {
    return await this.http
      .put(`${this.baseUrl}/${usuario.Id}`, usuario)
      .toPromise()
      .catch(response => {
        return Promise.reject(
          `Operação não realizada: ${response.Messages[0]}`
        );
      });
  }
}
