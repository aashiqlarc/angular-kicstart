import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrls: ['./counter-two.component.scss']
})
export class CounterTwoComponent implements OnInit {

  counter!:number;  
  constructor(private counterService : CounterService ) { }

  ngOnInit(): void {
    this.counterService.singlCount.subscribe(count =>{
      this.counter = count
    })
  }

  increment(){

    let incrementCounter = this.counter+1;
    this.counterService.countChange(incrementCounter);
}
decrement(){
  let derementCounter = this.counter - 1;
  this.counterService.countChange(derementCounter);
}
}
