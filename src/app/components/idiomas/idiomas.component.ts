import { Component,
  OnInit } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas : any[] = [
    {'titulo': 'Español', 'valor': '100'},
    {'titulo': 'Inglés', 'valor': '55'}
  ];

  constructor() {
   }
  ngOnInit(): void {
  }

}
