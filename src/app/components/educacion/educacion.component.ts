import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios : any[] = [
    {'place': 'IPEM 141 Dr. Dalmacio Velez Sardfield', 'title': 'Bachiller en humanidades y ciencias sociales.', 'date': '2007 - 2012'},
    {'place': 'Argentina Programa - #YoProgramo', 'title': 'Desarrollo web Full-Stack.', 'date': '2022 - Actualidad'},
  ];

  cursos: any[] = [
    {'year': '2017', 'title': 'Creación de una web profesional con WordPress', 'place': 'Domestika'},
    {'year': '', 'title': 'Introducción al Desarrollo Web Responsive con HTML y CSS', 'place': 'Domestika'},
    {'year': '2018', 'title': 'Técnicas de desarrollo web con HTML5 y CSS3', 'place': 'Domestika'},
    {'year': '', 'title': 'Introducción a la programación en JavaScript', 'place': 'Domestika'},
    {'year': '', 'title': 'Desarrollo de temas de WordPress', 'place': 'Domestika'},
    {'year': '', 'title': 'Diseño web creativo: planificación y programación desde cero', 'place': 'Domestika'},
    {'year': '2018', 'title': 'Introducción al desarrollo web con PHP', 'place': 'Domestika'},
    {'year': '2019', 'title': 'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS', 'place': 'Udemy'},
    {'year': '', 'title': 'React: De cero a experto ( Hooks y MERN )', 'place': 'Udemy'},
    {'year': '', 'title': 'Master en Frameworks JavaScript: Aprende Angular, React, Vue', 'place': 'Udemy'},
    {'year': '', 'title': 'Master en webs Full Stack: Angular, Node, Laravel, Symfony', 'place': 'Udemy'},
    {'year': '2020', 'title': 'Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress', 'place': 'Udemy'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
