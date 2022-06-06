import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/portfolio';
import { PORTFOLIO } from 'src/app/services/portfolio/mock-portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  
  portfolio = PORTFOLIO;
  selectedPortfolio: Portfolio | undefined;



  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  onSelect(item: Portfolio): void {
    this.selectedPortfolio = item;
  }

  backToPortfolio(): void {
    this.selectedPortfolio = undefined;
  }


}