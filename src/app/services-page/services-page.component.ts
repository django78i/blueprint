import { Component, OnInit, ElementRef } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, transition, style, animate, state, query } from '@angular/animations';



@Component({
	selector: 'app-services-page',
	templateUrl: './services-page.component.html',
	styleUrls: ['./services-page.component.scss'],
	animations: [
		trigger('fadeIn', [
            transition('*<=>void', [
                style({ opacity: '0', transform:'translateY(300px)' }),
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

	animationItem: any;



	constructor(private elem: ElementRef) { }

	ngOnInit(): void {
		var scroll = document.documentElement.scrollHeight;
        scroll += 200;
        console.log(scroll);
        var fond = this.elem.nativeElement.querySelectorAll('.fond2 .row');
        fond.forEach((element) => {
            element.style.height = scroll + 'px';
        });

	}


	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.autoplay = true;
		this.animationItem.loop = false;
	}



}
