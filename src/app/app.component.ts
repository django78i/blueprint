import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { AnimationItem, } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, transition, style, animate, state, query } from '@angular/animations';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('fade', [
			transition('*=>void', [
				style({ opacity: '1' }),
				animate('1500ms ease', style({ opacity:'0'}
				))
			]),
		]),
	]
})
export class AppComponent {
	title = 'ITPmarketing';
	preloader: boolean = false;
	//Lottie
	options: AnimationOptions = {
		path: '../assets/menuIconAnimation/menuAnimation.json',
	};
	animationItem: any;



	constructor(public menuService: MenuService) {
		// setTimeout(() => {
		// 	this.preloader = false;
		// }, 3000);
	}


	onActivate($event) {
		window.scroll(0, 0);
	}


	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.autoplay = true;
	}

	// onActivate($event){
	//   window.scroll(0,0);
	// }
}
