import { Repositorio } from './repositorio';
import { RepositorioService } from './../../services/repositorio/repositorio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  textSearch: string;
  repositorios: Repositorio[];
  constructor(private repositorioService: RepositorioService) {}

  pesquisar() {
    if (this.textSearch) {
      this.repositorioService.pesquisar(this.textSearch).subscribe(
        (res: any) => {
          console.log('respositorios', res);
          this.repositorios = res.items;
        },
        (error) => {
          console.log('erro', error);
        }
      );
    }
  }

}
