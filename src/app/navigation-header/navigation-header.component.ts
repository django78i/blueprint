import { MenuService } from './../services/menu.service';
import { Component, OnInit, NgZone, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
import { AnimationItem, } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';


@Component({
	selector: 'app-navigation-header',
	templateUrl: './navigation-header.component.html',
	styleUrls: ['./navigation-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('fade', [
			transition(':enter', [
				query('.page', style({ transform: 'translateX(1000px)' })),
				query('.page',
					stagger('100ms', [
						animate('500ms ease')
					]))
			]),
			transition(':leave', [
				query('.page',
					stagger('100ms', [
						animate('500ms ease', style({ transform: 'translateX(-1000px)', opacity: '0' }))
					]))
			])

		]),
	]

})
export class NavigationHeaderComponent implements OnInit {

	menuOpen: boolean = false;
	affiche: boolean = true;
	count: number = 0;

	pages = [
		{
		nom: 'projets',
		url : '../assets/menuIconAnimation/blprntRealisations.json'
	},
		{
		nom: 'services',
		url : '../assets/menuIconAnimation/blprntSolutions.json'
	},
		{
		nom: 'workflow',
		url : '../assets/menuIconAnimation/blprntWorkflow.json'
	},
		{
		nom: 'blog',
		url : '../assets/menuIconAnimation/blprntArticles.json'
	},
	//  'services', 'workflow', 'blog'
	];

	//Lottie
	options: AnimationOptions = {
		path: '../assets/images/blprntLogoAnimation.json',
	};

	optionsMenu2: AnimationOptions = {
		path: '../assets/menuIconAnimation/menuAnimation.json'
	};


	optionsMenu: AnimationOptions = {};

	animationItem: any;
	animationItem2: any;
	animationItemMenu: any;
	anim: any;
	index = 0;

	//boutton burger
	menuBtn: any;

	constructor(private ngZone: NgZone, private router: Router, private elem: ElementRef, private menuS: MenuService) { }

	ngOnInit(): void {
		this.menuBtn = document.querySelector('.menu-btn');

	}


	menu() {
		console.log(this.menuS.opened);
		if (!this.menuS.opened) {
			this.menuBtn.classList.add('open');
			this.affiche = false;
			this.menuS.opened = true;
		} else {
			this.menuBtn.classList.remove('open');
			this.menuS.opened = false;
			this.affiche = true;
		}

	}

	menuZone() {
		if (!this.menuS.opened) {
			this.menuBtn.classList.add('open');
			this.affiche = false;
			this.menuS.opened = true;
		} else {
			this.menuBtn.classList.remove('open');
			this.menuS.opened = false;
			this.affiche = true;
			// window.location.reload();
		}
	}

	animationCreatedBurger(animationItem2: AnimationItem): void {
		this.animationItem2 = animationItem2;
		// this.animationItem2  = this.animationItem;
		animationItem2.autoplay = false;
		animationItem2.loop = false;

	}


	burger() {
		this.index++
		console.log(this.index);
		this.animationItem2.play();
		this.index % 2 ? this.animationItem2.setDirection(1) : this.animationItem2.setDirection(-1);
		// this.animationItem2.setDirection(-1)
	}

	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.loop = false;
		if (this.count == 1) {
			this.animationItem.autoplay = false;
			this.animationItem.loop = true;
		}
	}


	complete($event): void {
		this.count += 1;
		if (this.count == 1) {
			this.updateAnimation();
		}

	}

	updateAnimation(): void {
		this.options = {
			...this.options, // In case you have other properties that you want to copy
			path: '../assets/images/blprntLogoHover.json',
		};
	}


	debut() {
		this.animationItem.play();
	}

	fin() {
		this.animationItem.pause();
	}

	icon(page) {
		this.anim = document.getElementById(page.nom);
		this.optionsMenu = {
			...this.optionsMenu,
			path: `${page.url}`,
		}
		this.anim.style.display = 'block';
	}

	animationCreatedMenu(animationItem: AnimationItem): void {
		this.animationItemMenu = animationItem;
	}

	finMenu(page) {
		this.anim = document.getElementById(page.nom);
		this.anim.style.display = 'none';
	}

	navigation(page) {
		console.log(page);

		if (page == 'home') {
			if(this.menuS.opened){
				this.menuOpen = true;
				this.menu();
				this.burger()
			}
			this.router.navigate(['']);
		}else{
			this.router.navigate([`${page}`]);
			this.menuOpen = true;
			this.menu();
			this.burger();
		}

	}
}
