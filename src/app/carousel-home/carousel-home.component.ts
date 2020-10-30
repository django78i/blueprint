import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state, query } from '@angular/animations';
import { AbstractControlDirective } from '@angular/forms';
import { GuardsCheckEnd } from '@angular/router';

@Component({
	selector: 'app-carousel-home',
	templateUrl: './carousel-home.component.html',
	styleUrls: ['./carousel-home.component.scss'],
	animations: [
		trigger('fade', [
			state('gauche', style({ opacity: '1' })),
			state('droite', style({ opacity: '1' })),
			transition('void=>gauche', [
				style({ transform: 'translateX(-300px)' }),
				animate('1000ms ease')
			]),
			transition('*=>void', [
				style({ zIndex: '1' }),
				animate('1000ms ease', style({ zIndex: '1' }))
			]),

			transition('void=>droite', [
				style({ transform: 'translateX(300px)' }),
				animate('1000ms ease')
			]),
		]),
		trigger('fadeIn', [
			state('gauche', style({ opacity: '1' })),
			state('droite', style({ opacity: '1' })),
			transition('*=>gauche', [
				style({ opacity: '0', transform: 'translateX(-300px)' }),
				animate('1500ms ease')
			]),
			transition('*=>droite', [
				style({ opacity: '0', transform: 'translateX(300px)' }),
				animate('1500ms ease')
			])
		]),
		trigger('fadeBoutton', [
			state('gauche', style({ opacity: '1' })),
			state('droite', style({ opacity: '1' })),
			transition('void=>gauche', [
				style({ opacity: '0', transform: 'translateX(-300px)' }),
				animate('1000ms ease')
			]),
			transition('gauche=>void', [
				animate('1000ms ease', style({ transform: 'translateX(300px)' }))
			]),
			transition('void=>droite', [
				style({ opacity: '0', transform: 'translateX(300px)' }),
				animate('1000ms ease')
			]),

			transition('droite => void', [
				animate('1000ms ease', style({ transform: 'translateX(-300px)' }),
				)
			]),
		])
	]
})
export class CarouselHomeComponent implements OnInit {

	slides = 1;
	state = '*';
	state2 = '*';

	photo = ['../assets/images/outsiderMob_coverImage.png', '../assets/images/yvelFluides_coverImage.png', '../assets/images/prism_coverImage.png']

	//icones
	iconsTab = [
		{
			name: 'Plateformes digitales',
			url: '../assets/images/icon_website.svg'
		},
		{
			name: 'Identités Visuelles',
			url: '../assets/images/icons8-diamond-heart.svg'
		},
		{
			name: 'Campagne marketing',
			url: '../assets/images/marketingIcon (1).svg'
		},
	]

	//slideItem
	slidesItemGauche = [
		{
			id:1,
			initial: 'P5',
			nom: 'Prism',
			description:'Identité visuelle'
		},
		{
			id:2,
			initial: '07',
			nom: 'Outsider Mob',
			description:'Identité visuelle'
		},
		{
			id:3,
			initial: 'Y4',
			nom: 'Yvel Fluides',
			description:'DXP'
		}
	]

	slidesItemDroit = [
		{
			id:2,
			initial: 'P5',
			nom: 'Prism',
			description:'Identité visuelle'
		},
		{
			id:3,
			initial: '07',
			nom: 'Outsider Mob',
			description:'Identité visuelle'
		},
		{
			id:1,
			initial: 'Y4',
			nom: 'Yvel Fluides',
			description:'DXP'
		}
	]

	slidesItemcentre = [
		{
			id:3,
			initial: 'P5',
			nom: 'Prism',
			description:'Identité visuelle'
		},
		{
			id:1,
			initial: '07',
			nom: 'Outsider Mob',
			description:'Identité visuelle'
		},
		{
			id:2,
			initial: 'Y4',
			nom: 'Yvel Fluides',
			description:'DXP'
		}
	]




	constructor(private elem: ElementRef) {
		this.slides = 1;
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		var slide = this.elem.nativeElement.querySelector('.panneau .icon:nth-child('+1+')');
		slide.style.opacity = 1;

	}


	gauche() {
		this.state = 'gauche';
		this.state2 = 'gauche';
		let index;
		if (this.slides == 1) {
			index = 3;
			this.boutonSlide(index);
			return this.slides = 3;
		} else {
			index = this.slides - 1;
			this.boutonSlide(index);
			return this.slides -= 1;
		}
	}

	droite() {
		this.state = 'droite';
		this.state2 = 'droite';
		let index;
		if (this.slides == 3) {
			index = 1;
			this.boutonSlide(index);
			return this.slides = 1;
		} else {
			index = this.slides + 1;
			this.boutonSlide(index);
			return this.slides += 1;

		}
	}

	changeSlide(index) {
		index += 1;
		this.boutonSlide(index);
		if (index < this.slides) {
			this.state = 'gauche';
			this.state2 = 'gauche';
			this.slides = index;
		} else if (index > this.slides) {
			this.state = 'droite';
			this.state2 = 'droite';
			this.slides = index;
		}

	}

	boutonSlide(index){
		console.log(index);
		console.log(index);
		console.log(this.slides);
		var slides = this.elem.nativeElement.querySelectorAll('.panneau .icon');
		slides.forEach((element)=>{
			element.style.opacity = 0.4; 
		})	
		var slide = this.elem.nativeElement.querySelector('.panneau .icon:nth-child('+index+')');
		slide.style.opacity = 1;

	}

}
