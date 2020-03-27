import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarPalabras'
})
export class BuscarPalabrasPipe implements PipeTransform {

  transform(value: any, word: any, idioma: any): any {
    if (word == null) return value;
    const resultadoPalabras = [];
    for (const palabra of value) {
      let comparador = '';
      idioma === 2 ? comparador = palabra.palabra2.toLowerCase() : comparador = palabra.palabra1.toLowerCase(); 
      if (comparador.indexOf(word.toLowerCase()) != -1) {
        resultadoPalabras.push(palabra);
      }
    }
    return resultadoPalabras;
  }
}
