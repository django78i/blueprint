import { Projet } from './../models/pages.models';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ElementRef } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, transition, style, animate, state, query } from '@angular/animations';




@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  animations: [
		trigger('fadeIn', [
            transition('*<=>void', [
                style({ opacity: '0', transform:'translateY(300px)' }),
                animate('1500ms ease')
            ])
        ])

	]

})
export class ProjectListPageComponent implements OnInit {

  constructor(public portfolioService: PortfolioService, private elem: ElementRef) { 

  }

  projetList: any[];
  projetSubscription: Subscription;
  projets: Observable<Projet[]>;

  //Lottie
  options: AnimationOptions = {
    path: '../assets/menuIconAnimation/blprntRealisations.json',
  };

  animationItem: any;


  ngOnInit(): void {
    var scroll = document.documentElement.scrollHeight;
    console.log(scroll);
    scroll += 700;
    console.log('scroll'+scroll);
    var fond = this.elem.nativeElement.querySelectorAll('.fondBorder') ;
    fond.forEach((element)=>{
        element.style.height =  scroll+'px';
    })

  }


  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.animationItem.autoplay = true;
    this.animationItem.loop = false;
  }

  best(projet, i){
    var index = i+1;
    // var folioList = document.getElementById('folio');
    var folioList = this.elem.nativeElement.querySelector(".folio:nth-child("+index+")");
    folioList.style.background = projet.couleurProjet;

  }

  bestLeave(projet, i){
    var index = i+1;
    var folioList = this.elem.nativeElement.querySelector(".folio:nth-child("+index+")");
    folioList.style.background = 'none';
  }


}
