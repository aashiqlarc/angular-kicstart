import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  constructor(private counterService : CounterService) { }
  counter!:number;  
  ngOnInit(): void {
    this.counterService.singlCount.subscribe(res=>{
      this.counter = res;
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
