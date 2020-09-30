import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, query } from '@angular/animations';
import { AbstractControlDirective } from '@angular/forms';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss'],
  animations: [
    trigger('fade', [
      state('gauche', style({ opacity:'1' })),
      state('droite', style({ opacity:'1' })),
      transition('*=>gauche', [
        style({ opacity: '0',transform: 'translateX(-300px)' }),
        animate('1000ms ease')
      ]),
      transition('*=>droite', [
        style({ opacity: '0',transform: 'translateX(300px)' }),
        animate('1000ms ease')
      ])
    ]),
    trigger('fadeIn',[
      state('gauche', style({ opacity:'1' })),
      state('droite', style({ opacity:'1' })),
      transition('*=>gauche', [
        style({ opacity: '0',transform: 'translateX(-300px)' }),
        animate('1500ms ease')
      ]),
      transition('*=>droite', [
        style({ opacity: '0',transform: 'translateX(300px)' }),
        animate('1500ms ease')
      ])
    ]),
    trigger('fadeBoutton', [
      state('gauche', style({ opacity:'1' })),
      state('droite', style({ opacity:'1' })),
      transition('*=>gauche', [
        style({ opacity: '0',transform: 'translateX(-300px)' }),
        animate('1000ms ease')
      ]),
      transition('*=>droite', [
        style({ opacity: '0',transform: 'translateX(300px)' }),
        animate('1000ms ease')
      ]),
    ])
  ]
})
export class CarouselHomeComponent implements OnInit {

  slides = 1;
  state = '*';
  state2 = '*';

  slideItem = [
    {
      initial: 'Y4',
      nom:'Yvel Fluides',
      domaine: 'DXP',
      date:'2019'
    },
    {
      initial: 'O7',
      nom:'Outsider Mob',
      domaine: 'Identité visuelle',
      date:'2020'
    },
    {
      initial: 'P5',
      nom:'Prism',
      domaine: 'Identité visuelle',
      date:'2015'
    }
  ]


  constructor() {
    this.slides = 1;
  }

  ngOnInit(): void {
  }

  gauche() {
    this.state = 'gauche';
    this.state2 = 'gauche';
    if(this.slides == 1){
      return this.slides = 3;
    }else{
      return this.slides -= 1; 
    }
  }

  droite() {
    this.state = 'droite';
    this.state2 = 'droite';
    if(this.slides == 3){
      return this.slides = 1;
    }else{
      return this.slides += 1; 
      
    }
  }


}
