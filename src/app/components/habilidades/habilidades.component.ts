import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades : any[] = [
    {'titulo': 'Front-end languages', 'lenguajes': 'HTML, CSS, JS'},
    {'titulo': 'Backend languages', 'lenguajes': 'PHP, MySQL'},
    {'titulo': 'Design', 'lenguajes': 'Figma'},
    {'titulo': 'Libraries', 'lenguajes': 'Bootstrap (CSS), JQuery (JS)'},
    {'titulo': 'CMS', 'lenguajes': 'WordPress (Senior)'},
    {'titulo': 'Others', 'lenguajes': 'Jira, Teamwork, Basecamp, Trello'},
    {'titulo': 'JS frameworks', 'lenguajes': 'Angular (Junior), React.js (Junior)'},
    {'titulo': 'Adobe Suite', 'lenguajes': 'Photoshop, Illustrator, XD'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
