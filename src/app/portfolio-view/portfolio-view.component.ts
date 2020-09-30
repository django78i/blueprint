import { Component, OnInit, ComponentFactoryResolver, NgZone, HostListener, ElementRef, ViewChild } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { FormulaireService } from '../services/formulaire.service';
import { Subscription, Observable } from 'rxjs';
import { Projet } from "../models/pages.models";
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, transition, style, animate, state, query } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Formulaire } from '../models/form.model';

interface Taille {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-portfolio-view',
    templateUrl: './portfolio-view.component.html',
    styleUrls: ['./portfolio-view.component.scss'],
    animations: [
        trigger('fade', [
            //  state('fadeGauch', style({opacity: 0, transform: 'translateX(30%)'})),

            transition('*=>*', [
                style({ opacity: 0, transform: 'translateX(30%)' }),
                animate('1000ms ease', style({ opacity: 1, transform: 'translateX(0%)' }))
            ])
        ]),
        trigger('fadeGauche', [
            transition('*=>*', [
                style({ opacity: 0, transform: 'translateX(-30%)' }),
                animate('1000ms ease', style({ opacity: 1, transform: 'translateX(0%)' }))
            ])
        ]),
        trigger('fadeIn', [
            transition('*<=>void', [
                style({ opacity: '0' }),
                animate('1500ms ease')
            ])
        ])

    ]
})
export class PortfolioViewComponent implements OnInit {

    portfolios: Projet[];
    bestPorfolios: any[] = [];
    portfolioSubscription: Subscription;


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
    features: string[] = ['Website'];
    allFeatures: string[] = ['Website', 'Vidéo', 'Animation', 'Infographie et logo', 'Autre'];

    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    firstform: FormGroup;
    secondform: FormGroup;
    thirdform: FormGroup;


    constructor(private formBuilder: FormBuilder, public portfolioService: PortfolioService,
         private router: Router, private ngZone: NgZone, private formulaireService: FormulaireService) {
        this.filteredFeatures = this.featuresCtrl.valueChanges.pipe(
            startWith(<string>null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFeatures.slice()));
    }

    ngOnInit(): void {
        this.initForm();
        this.portfolioService.getProjets();
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
            date: ''
        })


    }

    submitForm(){
        const formValue = this.firstform.value;
        const formValue2 = this.secondform.value;
        const formValue3 = this.thirdform.value;

        var newForm = new Formulaire(
            formValue['secteur'],
            formValue['lieu'],
            formValue['taille'],
            formValue['siteInternet'],
            formValue2['features'],
            formValue3['date'],
        )
        console.log(newForm);

        this.formulaireService.onSubmitForm(newForm);

    }



    // onContainerScroll($event){
    //     this.play();
    // }


    // onScroll(){
    //   console.log(scroll);
    // }

    // animationCreated(animationItem: AnimationItem): void {
    //   console.log(animationItem);
    //   this.animationItem = animationItem;
    //   this.animationItem.autoplay = false; 
    // }


    // stop(): void {
    //   this.ngZone.runOutsideAngular(() => this.animationItem.pause());
    // }
    // play(): void {
    //   this.ngZone.runOutsideAngular(() => this.animationItem.play());
    // }

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
