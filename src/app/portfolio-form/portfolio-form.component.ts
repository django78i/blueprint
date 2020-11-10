import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Projet } from '../models/portfolio.models';
import { PortfolioService } from '../services/portfolio.service';
import { trigger, transition, style, animate, state, query } from '@angular/animations';
import { FormulaireService } from '../services/formulaire.service';
import { Formulaire } from '../models/form.model';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';


interface Taille {
    value: string;
    viewValue: string;
}

@Component({
	selector: 'app-portfolio-form',
	templateUrl: './portfolio-form.component.html',
	styleUrls: ['./portfolio-form.component.scss'],
	animations: [
		trigger('fadeUp', [
			state('haut', style({ opacity: '1' })),
			transition(':enter', [
				style({ opacity: '0', transform: 'translateY(30px)' }),
				animate('1000ms ease')
			]),
			transition(':leave', [
				animate('1000ms ease', style({ opacity: '0', transform: 'translateY(-30px)' }))
			]),
		]),
		trigger('fadeIn', [
			transition('*<=>void', [
				style({ opacity: '0', transform: 'translateY(-300px)' }),
				animate('1500ms ease')
			])
		]),
		trigger('fadeDown', [
			transition('*<=>void', [
				style({ opacity: '0', transform: 'translateY(300px)' }),
				animate('1500ms ease')
			])
		])


	]

})
export class PortfolioFormComponent implements OnInit {

	portfolioForm: FormGroup;
	checked = false;
	firstform: FormGroup;
	secondform: FormGroup;
	thirdform: FormGroup;

	//Formulaire
	selectedValue: string;

	tailles: Taille[] = [
		{ value: '0-10', viewValue: '0-10' },
		{ value: '10-20', viewValue: '10-20' },
		{ value: '20-50', viewValue: '20-50' }
	];

	//features form
	visible = true;
	selectable = true;
	removable = true;
	separatorKeysCodes: number[] = [ENTER, COMMA];
	featuresCtrl = new FormControl();
	filteredFeatures: Observable<string[]>;
	features: string[] = [];
	allFeatures: string[] = ['Website', 'Vidéo', 'Animation', 'Infographie et logo', 'Autre'];

	@ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
	@ViewChild('auto') matAutocomplete: MatAutocomplete;



	constructor(private formBuilder: FormBuilder,
		private portfolioService: PortfolioService, private formulaireService: FormulaireService) {

	}

	ngOnInit() {
		this.initForm();
	}


	initForm() {
		this.firstform = this.formBuilder.group({
			secteur: '',
			nom: '',
			mail: '',
			siteInternet: ''
		});

		this.secondform = this.formBuilder.group({
			features: []
		})

		this.thirdform = this.formBuilder.group({
			date: '',
			budget: ''
		})


	}

	submitForm() {
		const formValue = this.firstform.value;
		const formValue2 = this.secondform.value;
		const formValue3 = this.thirdform.value;

		var newForm = new Formulaire(
			formValue['nom'],
			formValue['mail'],
			formValue['secteur'],
			formValue['siteInternet'],
			formValue3['date'],
			formValue3['budget'],
			formValue2['features']
		)
		console.log(newForm);

		this.formulaireService.onSubmitForm(newForm);

	}

	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;

		// Add our fruit
		if ((value || '').trim()) {
			this.features.push(value.trim());
		}

		// Reset the input value
		if (input) {
			input.value = '';
		}

		this.featuresCtrl.setValue(null);
	}

	remove(fruit: string): void {
		const index = this.features.indexOf(fruit);

		if (index >= 0) {
			this.features.splice(index, 1);
		}
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		this.features.push(event.option.viewValue);
		this.fruitInput.nativeElement.value = '';
		this.featuresCtrl.setValue(null);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.allFeatures.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
	}



}
