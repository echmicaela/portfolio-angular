import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit{
  @Input() title: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }
}
