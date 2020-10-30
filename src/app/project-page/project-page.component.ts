import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { Porfolio } from "../models/portfolio.models";
import { Projet } from "../models/pages.models";
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';



@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

	pages: any;
	rows: any[];
	bestPorfolios: any[] = [];
	portfolioSubscription: Subscription;
	id: string;
	pageParam: Subscription;
	PortfolioList: Observable<any>;
	projetSuivant: Observable<any>;

	//Lottie
	options: AnimationOptions = {
		path: '../assets/scrollDownAnimation.json',
	};

	animationItem: any;


	constructor(public portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute) {


	}

	ngOnInit(): void {
		this.pageParam = this.route.params.subscribe((params) => {
			this.id = params.id
		});
		this.PortfolioList = this.portfolioService.getPage(this.id);
		//Projet Suivant
		// var suivant = this.id +1;
		// console.log(suivant);
		// this.projetSuivant =  this.portfolioService.getPage(suivant);
	}

	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.autoplay = true;
		// this.animationItem.loop = false;
	}





}
