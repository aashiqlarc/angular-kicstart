import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-three',
  templateUrl: './counter-three.component.html',
  styleUrls: ['./counter-three.component.scss']
})
export class CounterThreeComponent implements OnInit {

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
