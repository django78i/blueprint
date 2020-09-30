import { Porfolio } from '../models/portfolio.models';
import { Projet } from '../models/pages.models';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



export class PortfolioService {
  

      projet: any[];
      singlePage: any;


    portfolioSubject = new Subject<Porfolio[]>();
    projetSubject = new Subject<Projet[]>();
    singlePageSubject = new Subject<Projet[]>();
    
    constructor(private httpClient: HttpClient, private afs: AngularFirestore){
     // this.getPorfolioFromServer();
      this.getProjets();

    }

 


    public getPage(id: string): any {
   return this.httpClient.get('http://localhost:3000/api/pages/' + id);   
  }
  emitSinglePage(){
    this.singlePageSubject.next(this.singlePage.slice());
}


    emitProjet(){
      this.projetSubject.next(this.projet.slice());
  }
    getProjets() {
      this.afs.collection('pages').valueChanges();
        // this.httpClient
        //   .get<any[]>('http://localhost:3000/api/pages')
        //   .subscribe(
        //     (response) => {
        //         console.log(response);
        //       this.projet = response;
        //       this.emitProjet();
        //     },
        //     (error) => {
        //       console.log('Erreur ! : ' + error);
        //     }
        //   );
    }



    savePortfolioToServer(portfolio: Porfolio) {
        
       // console.log(this.portfolios);
        this.httpClient
          .post('http://localhost:3000/api/portfolios', portfolio)
          .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }

    deletePortfolioToServer() {
        this.httpClient
          .delete('http://localhost:3000/api/portfolios')
          .subscribe(
            () => {
              console.log('Enregistrement supprimé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }

}