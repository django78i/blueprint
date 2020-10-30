import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Formulaire } from '../models/form.model';


@Injectable({
  providedIn: 'root'
})


export class FormulaireService {

  formDoc: AngularFirestoreDocument<Formulaire>;

  constructor(private afs: AngularFirestore) {
  }
  
  
  onSubmitForm(message: Formulaire){
    console.log(message);
    // this.formDoc = this.afs.doc<Formulaire>(message.nom).set(message);
    this.afs.collection('messages').doc(message.nom).set(Object.assign({}, message));
  }


}
