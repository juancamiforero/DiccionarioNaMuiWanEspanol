import { Component } from '@angular/core';
import { PALABRAS } from './lista-palabras';
import { Palabra } from './palabra';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diccionario';
  private palabras = PALABRAS;
  public palabraSeleccionada: Palabra = null;
  public selectedLanguage: string = ""
  public opcionSeleccionada: number = 2;
  public name1 = "Na Mui Wan - Español";
  public name2 = "Español - Na Mui Wan";
  public buscar='';

  ngOnInit() {
    this.actualizarOpcion();
  }

  private actualizarOpcion() { 
    if (this.opcionSeleccionada == 1) {
      this.selectedLanguage = this.name1; 
    } else if (this.opcionSeleccionada == 2) {
      this.selectedLanguage = this.name2
    }
  }

  onSelect(palabra: Palabra) {
    // Cambiar al componente de palabra con el id de la palabra seleccionada
    this.palabraSeleccionada = palabra;
    this.actualizarOpcion();
  }

  onSelectOpcion(opcion: number) {
    this.opcionSeleccionada = opcion;
    this.actualizarOpcion();
  }

  reproducirAudio(ruta: string) {
    const audio = new Audio(ruta);
    audio.play();
  }

}
