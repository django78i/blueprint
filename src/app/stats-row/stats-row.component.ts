import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-stats-row',
  templateUrl: './stats-row.component.html',
  styleUrls: ['./stats-row.component.scss']
})
export class StatsRowComponent implements OnInit {
  @Input() rows: any;
  initialTop:number =0;
  parallaxRatio: number = 0.2;
  zoneParallax:any;


  constructor() { }

  ngOnInit(): void {
  }

}
