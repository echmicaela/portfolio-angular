import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio/portfolio-data.service';


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  portfolioID: any;

  portfolioFull: any;

  
  log(val:any) { console.log(val); }

  constructor(private rutaActiva: ActivatedRoute, private PortfolioData: PortfolioDataService) {
    //console.log(PortfolioData.portfolioFull());
    this.portfolioFull = PortfolioData.portfolioFull();

    
  }
  
  ngOnInit(): void {
    //console.log('Portfolio ID is ', this.rutaActiva.snapshot.paramMap.get('id'));
    this.portfolioID = this.rutaActiva.snapshot.paramMap.get('id');
    
  }

}

