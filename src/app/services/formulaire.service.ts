import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})


export class FormulaireService {

  constructor(private afs: AngularFirestore) { }


  onSubmitForm(message){
    console.log(message);
    // this.afs.collection('messages').doc(message.nom).set(Object.assign({}, message));
  }


}
