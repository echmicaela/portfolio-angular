import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  sobremi : any = [
    {'label': 'front-end', 'titulo': 'Desarrollo Front-end', 'porcentaje': 85},
    {'label': 'back-end', 'titulo': 'Desarrollo Back-end', 'porcentaje': 40},
    {'label': 'ux-ui', 'titulo': 'Diseño UX/UI', 'porcentaje': 65}
  ];

  textoSobreMi:string = 'Soy desarrolladora Front-end y estudiante de desarrollo Full-Stack. Me gusta mucho aprender nuevas tecnologías y mejorar año a año de manera autodidacta.';

  linkCV:string = './MicaelaEcheverriaCV.pdf';

  fotoSobreMi:string = 'assets/img/fotomica.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
