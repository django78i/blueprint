import { Component, OnInit } from '@angular/core';
import{ PortfolioService} from '../services/portfolio.service';
import { Subscription } from 'rxjs';
import { Porfolio } from "../models/portfolio.models";
import { Projet } from "../models/pages.models";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  pages: any;
  rows: any[];
  bestPorfolios: any[]=[];
  portfolioSubscription: Subscription;
  id: string;

  constructor(public portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute) { 

    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id
    })
    this.portfolioService.getPage(this.id).subscribe((page)=>{
      this.pages = page;
      this.rows = page.rows;
      console.log(this.pages.couleurProjet);
    });
    
 
}




}
