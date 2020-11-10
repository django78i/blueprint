import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, ElementRef } from '@angular/core';
import { getLocaleDateTimeFormat, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-row-project-content',
  templateUrl: './row-project-content.component.html',
  styleUrls: ['./row-project-content.component.scss']
})
export class RowProjectContentComponent implements OnInit, AfterContentInit {

  @Input() rows: any;

  texte: any;
  texte2: string;
  row: any;
  constructor(private elem: ElementRef ) { 
  }
  
  ngOnInit(): void {
    this.row = this.rows;
  
  }
  
  ngAfterViewInit(){
    
  }
  
  ngAfterContentInit(){
    // var service = document.getElementById('textZone');
    //   if (this.rows.contenu){

    //     var folioList = this.elem.nativeElement.querySelectorAll("#textZone");
    //     console.log(folioList.getBoundingClientRect().top);
    //   }
    

  }


  mediaPos(row){
    switch (row) {
      case '1':
        return '2';
      case '2':
        return '1';
    }

  }

  positionText(row) {
		switch (row) {
			case '1':
				return 'left';
			case '2':
				return 'right';

			case '3':
				return 'center';
		}

	}


  textPos(row){
    switch (row) {
      case '1':

        return '1';
      case '2':
        return '2';
    }
  }

}
