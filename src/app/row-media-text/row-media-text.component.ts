import { style } from '@angular/animations';
import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-row-media-text',
  templateUrl: './row-media-text.component.html',
  styleUrls: ['./row-media-text.component.scss']
})
export class RowMediaTextComponent implements OnInit {

  @Input() rows: any;
  initialTop:number =0;
  parallaxRatio: number = 0.2;
  zoneParallax:any;

  constructor(private elem: ElementRef ) { 

  }

  ngOnInit(): void {
      this.initialTop  =0;

    this.zoneParallax = this.elem.nativeElement.querySelector(".text-content");
    this.initialTop = this.zoneParallax.getBoundingClientRect().top * 0.25;

  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    this.zoneParallax.style.marginTop = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
  }



  textPos(row) {
    switch (row) {
      case '1':

        return '1';
      case '2':
        return '2';
    }
  }

  mediaPos(row) {
    switch (row) {
      case '1':
        return '2';
      case '2':
        return '1';
    }

  }


}
