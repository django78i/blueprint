import { Porfolio } from '../models/portfolio.models';
import { Projet } from '../models/pages.models';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



export class PortfolioService {


	projetsList: Observable<any[]>;
	singlePage: any;
	singleObser: Observable<any>;
	projets: any[];
	projetSingle: any;
	projetsSuivant  = new Subject<string>();
	;


	portfolioSubject = new Subject<Porfolio[]>();
	projetSubject = new Subject<Projet[]>();
	singlePageSubject = new Subject<Projet[]>();

	constructor(private httpClient: HttpClient, private afs: AngularFirestore) {
		// this.getPorfolioFromServer();
		this.getProjets();

	}



	public getPage(id: string) {
		console.log(id);
		return this.singleObser =  this.afs.collection('pages').doc(id).valueChanges();
	}

	emitSinglePage() {
		this.singlePageSubject.next(this.projetSingle);
	}



	emitProjet() {
		this.projetSubject.next(this.projets);
	}

	getProjets():Observable<any[]> {
		return this.projetsList = this.afs.collection('pages').valueChanges();
	}





}