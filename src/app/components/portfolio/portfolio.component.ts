import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio/portfolio-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  portfolioFull: any;

  constructor(private PortfolioData: PortfolioDataService) {
    //console.log(PortfolioData.portfolioFull());
    this.portfolioFull = PortfolioData.portfolioFull()
   }

  ngOnInit(): void {
    
  }

}