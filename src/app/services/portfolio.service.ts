import { Projet } from '../models/pages.models';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, mergeMap, share, switchMap, tap } from 'rxjs/operators';



export class PortfolioService {


	projetsList: Observable<any[]>;
	singlePage: any;
	projets: Projet[];
	projetSuivante: Observable<any>;
	singlePageSubject = new Subject<Projet[]>();

	constructor(private httpClient: HttpClient, private afs: AngularFirestore) {
		this.getProjets();

	}


	getProjets(): Observable<Projet[]> {
		return this.projetsList = this.afs.collection<Projet>('pages').valueChanges();
	}

	public getPage(id: string) {
		return this.afs.collection('pages').doc(id).valueChanges()
			.subscribe(projet => {
				this.emitSinglePage(projet);
			});
	}

	emitSinglePage(projet) {
		return this.singlePageSubject.next(projet);
	}

	projetSuivant(projetUnique): Observable<any> {
		this.projetSuivante = this.projetsList.pipe(
			map((projets: any[] )=> {
				const ind = projets.findIndex(projet => {
					return projet.id === projetUnique.id ;
				})
				const suivant = ind == projets.length - 1 ? projets[0] : projets[ind + 1];
				return suivant;
			})
		)
		return this.projetSuivante;
	}

}