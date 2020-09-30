import { Component, OnInit, Input } from '@angular/core';
import { getLocaleDateTimeFormat, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-row-project-content',
  templateUrl: './row-project-content.component.html',
  styleUrls: ['./row-project-content.component.scss']
})
export class RowProjectContentComponent implements OnInit {

  @Input() rows: any;

  texte: any;
  texte2: string;
  row: any;
  constructor() { }

  ngOnInit(): void {
    this.row = this.rows;
    console.log(this.row);
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

  mediaPos(row){
    switch (row) {
      case '1':
        return '2';
      case '2':
        return '1';
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
