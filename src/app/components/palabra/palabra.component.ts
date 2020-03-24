import { Component, Input } from '@angular/core';
import { Palabra } from 'src/app/palabra';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent {

  @Input() entradas: {palabra: Palabra, opcion: number };
  public nombrePalabra: string;

  constructor() { }

  ngOnInit() {
  }
  reproducirAudio(ruta: string) {
    const audio = new Audio(ruta);
    audio.play();
  }

}
