import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  trabajos : any = [
    {'date': 'Diciembre 2017 - Actualidad', 'title': 'Diseño y Desarrollo web', 'company': 'Freelancer', 'description': 'Trabajo de manera independiente tomando proyectos de diseño y desarrollo web, maquetación de newsletters y landing pages. Proyectos como: academias online, tiendas online, sitios institucionales, y más.'},
    {'date': 'Agosto 2020 - Actualidad', 'title': 'WordPress Developer', 'company': 'Officemedia - Madrid, España (Remoto)', 'description': 'Construcción de sitios webs con WordPress como base, creando themes a medida y usando HTML, PHP, CSS, y JS para hacerlos más dinámicos y personalizados a lo que necesitaba cada cliente.'}
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
