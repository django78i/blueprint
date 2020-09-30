import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss'],
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
            animate('500ms ease', style({ transform: 'translateX(-1000px)', opacity:'0' }))
          ]))
        // animate('1000ms ease', style({ opacity: 0, transform: 'translateX(300px)' }))
      ])

    ]),
  ]

})
export class NavigationHeaderComponent implements OnInit {

  menuOpen: boolean = false;
  affiche: boolean = true;

  pages = ['réalisations', 'solutions', 'worflow', 'blog']
  constructor() { }

  ngOnInit(): void {
  }



  menu() {
    const menuBtn = document.querySelector('.menu-btn');
    if (!this.menuOpen) {
      menuBtn.classList.add('open');
      this.affiche = false;
      this.menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      this.menuOpen = false;
      this.affiche = true;

    }
  }

}
