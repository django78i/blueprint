import { Component,  } from '@angular/core';
import {CdkStepper, } from '@angular/cdk/stepper'; 
import { trigger, transition, style,animate, state, query } from '@angular/animations';


@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: GetInTouchComponent }],
  animations: [
    trigger('fadeIn',[
      transition('*=>void', [
        animate('1000ms ease', style({ opacity: '0' }))
      ]),
      transition('void=>*', [
        style({ opacity: '0' }),
        animate('1000ms ease', )
      ])
    ])
  ]
})


export class GetInTouchComponent extends CdkStepper  {

  etapes = ['cadre intervention', 'limites'];

  onClick(index: number): void {
    console.log('etape: '+index);
    this.selectedIndex = index+1;
    console.log('etape after : '+index);
  }


}

