import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  opened: boolean = false ;

  constructor() { 
    // this.opened = false;
  }

  changeMenu(){
    console.log('menu'+this.opened);
    this.opened !=this.opened;
  }
}
