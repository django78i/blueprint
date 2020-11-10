import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-parallax-template',
    templateUrl: './parallax-template.component.html',
    styleUrls: ['./parallax-template.component.scss']
})
export class ParallaxTemplateComponent implements OnInit, AfterViewInit {

    constructor(private elem: ElementRef) { }

    ngOnInit(): void {
        // var scroll = document.documentElement.scrollHeight;
        // scroll += 200;
        // console.log(scroll);
        // var fond = this.elem.nativeElement.querySelectorAll('.lignes');
        // fond.forEach((element) => {
        //     console.log('une ligne');
        //     element.style.height = scroll + 'px';
        // });

    }

    ngAfterViewInit() {


    }

}
