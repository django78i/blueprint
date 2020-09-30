import { Component, OnInit, Input } from '@angular/core';
import{ PortfolioService} from '../services/portfolio.service';
import { Subscription } from 'rxjs';
import { Porfolio } from "../models/portfolio.models";
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-portfolios',
  templateUrl: './best-portfolios.component.html',
  styleUrls: ['./best-portfolios.component.scss']
})
export class BestPortfoliosComponent implements OnInit {

   @Input() titre: string;
   @Input() sousTitre: string;
   @Input() id: string;
   @Input() imageBanniere: string;
   @Input() imageMiniature: string;
   @Input() categories: [];

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.imageMiniature);

  }

  onViewPage(id){
    this.router.navigate(['/projet', id]);
  }

}
