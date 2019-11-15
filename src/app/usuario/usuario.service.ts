import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {
  ultimoId = 1;
  usuarios = [{ id: 1, nome: 'João' }];

  private baseUrl = 'https://agenda-api.azurewebsites.net/api/usuarios';

  constructor(
    private http: HttpClient,
    @Inject('logPrefix') private logPrefix: string
  ) {}

  async post(usuario: any): Promise<any> {
    return await this.http.post(this.baseUrl, usuario).toPromise();
  }

  async getAll(): Promise<any> {
    const response = await this.http.get(this.baseUrl).toPromise();
    return () => {
      return response;
    };
  }

  async delete(id: number): Promise<void> {
    await this.http
      .delete(`${this.baseUrl}/${id}`)
      .toPromise()
      .catch(erro => {
        console.log(erro);
        return Promise.reject(
          'Falha ao realizar operação, contate o administrador!'
        );
      });
  }
}
