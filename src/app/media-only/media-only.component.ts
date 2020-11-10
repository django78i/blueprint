import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-media-only',
  templateUrl: './media-only.component.html',
  styleUrls: ['./media-only.component.scss']
})
export class MediaOnlyComponent implements OnInit {
  @Input() rows: any;
  initialTop:number =0;
  parallaxRatio: number = 0.2;
  zoneParallax:any;

  constructor() { }

  ngOnInit(): void {
  }

}
