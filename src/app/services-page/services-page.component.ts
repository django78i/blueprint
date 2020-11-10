import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, transition, style, animate, state, query } from '@angular/animations';
import AOS from 'aos';
import { ConstantPool } from '@angular/compiler';
import { Console } from 'console';



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

	options2: AnimationOptions = {
		path: '../assets/solutions/solutionMarketing_icon.json',
	};
	options3: AnimationOptions = {
		path: '../assets/solutions/solutionGestion_icon.json',
	};

	animationItem: any;
	animationItem2: any;
	animationItem3: any;
	initialTop: any[];
	zoneParallax: any[];
	parallaxRatio: number = 0.2;


	count: number = 2;

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
	animationCreated2(animationItem: AnimationItem): void {
		this.animationItem2 = animationItem;
		this.animationItem2.autoplay = false;
	}
	animationCreated3(animationItem: AnimationItem): void {
		console.log("animation créé");
		this.animationItem3 = animationItem;
		this.animationItem3.autoplay = false;
	}


	animLaunch() {
		const image = this.elem.nativeElement.querySelectorAll(".anim");
		const observer = new IntersectionObserver((entries) => {
			var data = entries;
			var i;
			entries.forEach((entry) => {
				if (entry.isIntersecting == true) {
					this.count += 1;
					if (this.count == 1) {
						console.log("ici:");
						setTimeout(() => {
							this.animationItem2.play();
							this.animationItem2.loop = false;
						}, 300)
					} else if (this.count == 2) {
						console.log("la: ");
						setTimeout(() => {
							this.animationItem3.play();
							this.animationItem3.loop = false;
						}, 300)

					}
				} else if (entry.isIntersecting == false) {
					this.count -= 1;
					switch (this.count) {
						case 0:
							return this.animationItem2.stop();;
						case 1:
							return this.animationItem3.stop();;
					}

				}
			})
		});
		image.forEach((images) => {
			observer.observe(images);
		})

	}


}
