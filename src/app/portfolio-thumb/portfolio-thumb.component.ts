import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-thumb',
  templateUrl: './portfolio-thumb.component.html',
  styleUrls: ['./portfolio-thumb.component.scss']
})
export class PortfolioThumbComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  @Input() favoris: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
