import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, tamanho: number): string {
    if (texto.length > tamanho) {
      return texto.substr(0, tamanho) + '...';
    } else {
      return texto;
    }
  }
}
