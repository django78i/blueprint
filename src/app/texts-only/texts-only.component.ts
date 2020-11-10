import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'app-texts-only',
	templateUrl: './texts-only.component.html',
	styleUrls: ['./texts-only.component.scss']
})
export class TextsOnlyComponent implements OnInit {
	@Input() rows: any;
	initialTop: number = 0;
	parallaxRatio: number = 0.2;
	zoneParallax: any;

	constructor() { }

	ngOnInit(): void {
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

}
