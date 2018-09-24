import { PipeTransform } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';

export class DescricaoReduzida implements PipeTransform {
  transform(texto: string): string {
    if(texto.length > 15) {
      return texto.substr(0, 15) + '...';
    } else {
      return texto;
    }
  }
}
