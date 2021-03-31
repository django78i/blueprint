import { element } from 'protractor';
import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, NgZone, HostListener, ElementRef, ViewChild } from '@angular/core';
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
import { AotSummaryResolver } from '@angular/compiler';
import AOS from 'aos';

interface Taille {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-portfolio-view',
    templateUrl: './portfolio-view.component.html',
    styleUrls: ['./portfolio-view.component.scss'],
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
export class PortfolioViewComponent implements OnInit, AfterViewInit {


    //titreText
    titleText = ['digitales', 'humaines', 'bluePrint'];

    //Lottie
    options: AnimationOptions = {
        path: '../assets/solutions/newAnimHome.json',
    };

    animationItem: any;


    //animation Texte
    textChange: string = 'humaines';

    portfolios: Projet[];
    bestPorfolios: any[] = [];
    portfolioSubscription: Subscription;


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

    firstform: FormGroup;
    secondform: FormGroup;
    thirdform: FormGroup;


    constructor(private formBuilder: FormBuilder, public portfolioService: PortfolioService,
        private router: Router, private ngZone: NgZone, private formulaireService: FormulaireService,
        private elem: ElementRef) {
        this.filteredFeatures = this.featuresCtrl.valueChanges.pipe(
            startWith(<string>null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFeatures.slice()));
    }

    ngOnInit(): void {

        AOS.init();
        var service = document.getElementById('servizer');
        this.initForm();
        setInterval(() => {
            this.textContent();
        }, 3000);

        var scroll = document.documentElement.scrollHeight;
        scroll += 200;
        var fond = this.elem.nativeElement.querySelectorAll('.fondBorder');
        fond.forEach((element) => {
            element.style.height = scroll + 'px';
        });

    }

    ngAfterViewInit() {
        // window.location.reload();

    }


    // @HostListener('scroll') scrollHandler(event) {
    //     console.log("Scroll Event");
    // }

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

    animationCreated(animationItem: AnimationItem): void {
        this.animationItem = animationItem;
        this.animationItem.autoplay = true;
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

    textContent() {
        switch (this.textChange) {
            case 'humaines':
                this.textChange = 'bluePrint';
                break;
            case 'bluePrint':
                this.textChange = 'digitales';
                break;
            case 'digitales':
                this.textChange = 'humaines';
                break;
        }
    }


}
