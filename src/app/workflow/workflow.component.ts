import { Component, OnInit, HostListener, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import AOS from 'aos';
import { R } from '@angular/cdk/keycodes';


@Component({
	selector: 'app-workflow',
	templateUrl: './workflow.component.html',
	styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit, AfterViewInit {

	@ViewChild('slide') slide: ElementRef<HTMLElement>;
	@ViewChild('scroll') scroll: ElementRef<HTMLElement>;
	@ViewChild('contenu') contenu: ElementRef<HTMLElement>;
	//Lottie
	options: AnimationOptions = {
		path: '../assets/menuIconAnimation/blprntWorkflow.json',
	};

	animationItem: any;
	textTexture: any;

	constructor(public elemRef: ElementRef) { }

	ngOnInit(): void {
		AOS.init();
	}

	ngAfterViewInit() {
		this.textTexture = this.elemRef.nativeElement.querySelectorAll('.contentText');
	}



	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event) {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var cercles = this.elemRef.nativeElement.querySelectorAll('.droite .cercleDroit,.gauche .cercleGauche ');
		var lastCercle = cercles[cercles.length - 1].getBoundingClientRect().y;
		var scrollLength = lastCercle - cercles[0].getBoundingClientRect().y;
		var scrolled = ((winScroll - 141) / scrollLength) * 100;
		this.scroll.nativeElement.style.height = scrolled + "%";
		var i = 0;
		cercles.forEach(e => {
			var s = e.getBoundingClientRect().y;
			var d = s - cercles[0].getBoundingClientRect().y;
			var pos = (d / scrollLength) * 100;
			if (parseFloat(this.scroll.nativeElement.style.height) >= pos) {
				this.textTexture[i].style.opacity = 1;
				e.style.borderColor = "#2b50b5";
			} else {
				e.style.borderColor = "#cccccc1c";
				this.textTexture[i].style.opacity = 0.4;
			}
			i++
		});
	}

	animationCreated(animationItem: AnimationItem): void {
		this.animationItem = animationItem;
		this.animationItem.autoplay = true;
		this.animationItem.loop = false;
	}



}
