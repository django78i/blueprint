import { Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { Projet } from "../models/portfolio.models";
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';



@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit, OnDestroy {

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


	constructor( public portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute) {

		this.route.params.subscribe((params) => {
			this.id = params.id
		});
		this.portfolioService.getPage(this.id);

	}

	ngOnInit(): void {

		
		
		this.portfolioSubscription = this.portfolioService.singlePageSubject.subscribe((projet) => {
			
			this.pages = projet;
			this.projetSuivant = this.portfolioService.projetSuivant(this.pages);
		})


	}


	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.autoplay = true;

	}

	OnviewPage(projet: Observable<any>) {
		projet.subscribe((projet) => {
			this.router.navigate(['projet/', projet.id]);
			window.scroll(0, 0);
			this.portfolioService.emitSinglePage(projet);
		})
	}



	ngOnDestroy(){
		this.portfolioSubscription.unsubscribe();
	}


}
