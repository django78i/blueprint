import { Component, OnInit, HostListener } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {


	    //Lottie
      options: AnimationOptions = {
        path: '../assets/images/blprntLoaderV2.json',
      };
    
      animationItem: any;
  

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    var full=100;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var scrolling = window.pageYOffset;
    // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var height = 1400; 
    var scrolled = ((winScroll -187)/ height) * 100;
      document.getElementById("myBar").style.height = scrolled + "%";
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.animationItem.autoplay = true;
    this.animationItem.loop = false;
  }
  


}
