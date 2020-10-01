import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    var full=100;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('winscroll: '+winScroll);
    var scrolling = window.pageYOffset;
    // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var height = 1400; 
    console.log('scrolling: '+scrolling);
    var scrolled = ((winScroll -187)/ height) * 100;
    console.log('scrolled: '+scrolled);
      document.getElementById("myBar").style.height = scrolled + "%";
  }



}
