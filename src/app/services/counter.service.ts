import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  private countValue =  new BehaviorSubject<number>(0)
  singlCount = this.countValue.asObservable()
  constructor() { }

  countChange(count:number){
    this.countValue.next(count)
  }
}
