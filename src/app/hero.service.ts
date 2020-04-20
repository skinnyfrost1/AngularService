import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  something = [
    "This is something to show",
    "bbbbbbbbb"
  ]

  setSomething(a :any){
    this.something[0] = a;
    console.log(this.something);
  }
  
  getSomething():Observable<string[]>{
    return of (this.something);
  }

  // getSomething1(){
  //   return  (this.something);
  // }


  constructor() { }
}
