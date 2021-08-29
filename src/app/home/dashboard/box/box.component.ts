import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

@Input() make! : string;
@Output() notify:EventEmitter<string> = new EventEmitter<string>();
onclicked(message:string){
  this.notify.emit(this.make+ "was clicked");
    } 
constructor() { }

  ngOnInit(): void { }

}
