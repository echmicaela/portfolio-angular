import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }
  
  portfolioFull(){
    return [
      {
        id: "0", 
        title: "Frondal Avándaro", 
        background: "assets/img/portfolio/MockupFrondal.jpg", 
        category: "Diseño y desarrollo", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        masonryItems: [
          { 
            image: 'assets/img/portfolio/FrondalAvandaro.jpg',
            imageTitle: 'Foto1',
          },
          { 
            image: 'assets/img/portfolio/FrondalAvandaro2.jpg',
            imageTitle: 'Foto2',
          }
        ],
        link: 'https://frondalavandaro.mx/landing/'
      },
      {
        id: "1", 
        title: "Kari Wain", 
        background: "assets/img/portfolio/KariWain-jpg.jpg", 
        category: "Diseño y desarrollo WordPress", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        masonryItems: [
          { 
            image: 'assets/img/portfolio/Mujeres_que_escriben.jpg',
            imageTitle: 'Foto1',
          },
          { 
            image: 'assets/img/portfolio/Pagina_de_producto.jpg',
            imageTitle: 'Foto2',
          },
          { 
            image: 'assets/img/portfolio/Pre_talleres_plantilla.jpg',
            imageTitle: 'Foto3',
          },
          { 
            image: 'assets/img/portfolio/Talleres.jpg',
            imageTitle: 'Foto4',
          },
          { 
            image: 'assets/img/portfolio/Login.jpg',
            imageTitle: 'Foto5',
          }
        ],
        link: '' 
      },
      {
        id: "2", 
        title: "El Santuario", 
        background: "assets/img/portfolio/ElSantuario1.jpg", 
        category: "Diseño y desarrollo", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        masonryItems: [
          { 
            image: 'assets/img/portfolio/ElSantuario.jpg',
            imageTitle: 'Foto1',
          },
        ],
        link: '' 
      },
      {
        id: "3", 
        title: "Kuik Kids", 
        background: "assets/img/portfolio/KK1.jpg", 
        category: "Diseño y desarrollo WordPress", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        masonryItems: [
          { 
            image: 'assets/img/portfolio/KK1.jpg',
            imageTitle: 'Foto1',
          },
          { 
            image: 'assets/img/portfolio/KK2.jpg',
            imageTitle: 'Foto2',
          },
          { 
            image: 'assets/img/portfolio/KK3.jpg',
            imageTitle: 'Foto3',
          },
          { 
            image: 'assets/img/portfolio/KK4.jpg',
            imageTitle: 'Foto4',
          },
          { 
            image: 'assets/img/portfolio/KK5.jpg',
            imageTitle: 'Foto5',
          },
          { 
            image: 'assets/img/portfolio/KK6.jpg',
            imageTitle: 'Foto6',
          }
        ],
        link: ''  
      }
    ]
  }

}
