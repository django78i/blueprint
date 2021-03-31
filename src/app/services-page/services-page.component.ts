import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, transition, style, animate, state, query } from '@angular/animations';
import AOS from 'aos';



@Component({
	selector: 'app-services-page',
	templateUrl: './services-page.component.html',
	styleUrls: ['./services-page.component.scss'],
	animations: [
		trigger('fadeIn', [
			transition('*<=>void', [
				style({ opacity: '0', transform: 'translateY(300px)' }),
				animate('1500ms ease')
			])
		])

	]
})
export class ServicesPageComponent implements OnInit {

	//icones
	iconsTab = [
		{
			name: 'UI/UX',
			url: '../assets/images/uiIcon.svg'
		},
		{
			name: 'design',
			url: '../assets/images/designIcon.svg'
		},
		{
			name: 'marketing',
			url: '../assets/images/marketingIcon (2).svg'
		},
		{
			name: 'gestion',
			url: '../assets/images/gestionIcon.svg'
		}
	]

	//Lottie
	options: AnimationOptions = {
		path: '../assets/menuIconAnimation/blprntSolutions.json',
	};



	optionsTab: Array<{ id: number, animationItem: any, play: boolean, options: AnimationOptions }> = [
		{
			animationItem: '',
			id: 0,
			play: true,
			options: {
				path: '../assets/solutions/newAnimHome.json'
			}
		},
		{
			id: 1,
			animationItem: '',
			play: true,
			options: {
				path: '../assets/solutions/2.json'
			}
		},
		{
			id: 2,
			animationItem: '',
			play: true,
			options: {
				path: '../assets/solutions/3.json'
			}
		},
		// {
		// 	id: 3,
		// 	animationItem: '',
		// 	play: true,
		// 	options: {
		// 		path: '../assets/solutions/solutionGestion_icon.json'
		// 	}
		// }

	]

	animationItem: any;
	initialTop: any[];
	zoneParallax: any[];
	parallaxRatio: number = 0.2;


	count: number = 3;

	constructor(private elem: ElementRef) { }

	ngOnInit(): void {
		AOS.init();
		this.animLaunch();
		this.initialTop = [];
		this.zoneParallax = this.elem.nativeElement.querySelectorAll(".textService");
		this.zoneParallax.forEach((query) => {
			this.initialTop.push(query.getBoundingClientRect().top * 0.15);
		})

	}



	@HostListener("window:scroll", ["$event"])
	onWindowScroll(event) {
		var i = 0;
		this.zoneParallax.forEach((query) => {
			query.style.top = (this.initialTop[i] - (window.scrollY * this.parallaxRatio)) + 'px';
			i++
		})
	}


	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.autoplay = true;
		this.animationItem.loop = false;
	}
	animationCreated2(animationItem: AnimationItem, i): void {
		this.optionsTab[i].animationItem = animationItem;
		this.optionsTab[i].animationItem.autoplay = false;
		this.optionsTab[i].animationItem.loop = false;
	}

	animLaunch() {
		const image = this.elem.nativeElement.querySelectorAll(".anim");
		var donnee: any = '';
		var observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting == true) {
					if (entry.boundingClientRect.top > 0) {
						this.count += 1;
						this.optionsTab[this.count - 1].animationItem.play();
						this.optionsTab[this.count - 1].play = true;
					} else {
						donnee = this.optionsTab.filter(option => option.play === false && option.id < this.count - 1)
						this.optionsTab[donnee[donnee.length - 1].id].animationItem.play();
						this.optionsTab[donnee[donnee.length - 1].id].play = true;
					}
				} else {
					if (entry.boundingClientRect.top < 0) {
						donnee = this.optionsTab.find(option => option.play === true).id;
						this.optionsTab[donnee].animationItem.stop();
						this.optionsTab[donnee].play = false;
					} else {
						this.count -= 1;
						this.optionsTab[this.count].animationItem.stop();
						this.optionsTab[this.count].play = false;
					}
				}
			})
		});
		image.forEach((images) => {
			observer.observe(images);
		})

	}


}
