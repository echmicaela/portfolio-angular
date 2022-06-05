import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() ruta: string = "";
  @Input() secondClass: string= "";
  @Input() target: string = "";
  @Input() titleBoton: string = "";
  @Input() textoBoton: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
