import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repositorio } from 'src/app/home/repositorio';

@Injectable({
  providedIn: 'root'
})

export class RepositorioService {
  private url = 'https://api.github.com/search/repositories';
  constructor(private http: HttpClient) { }

  pesquisar(nome: string) {
    return this.http.get(this.url, {params: {q: nome}});
  }
}
