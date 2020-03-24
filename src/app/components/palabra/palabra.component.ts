import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {

  public nombrePalabra: string;

  constructor() { }

  ngOnInit() {
  }

}
