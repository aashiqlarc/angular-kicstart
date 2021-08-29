import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  makes = ['a','b','c','d','e'];
  title!: string ;
  constructor() { }
  ngOnInit(): void { }
  onnotify(message : string){
    this.title= message;
  }
}
