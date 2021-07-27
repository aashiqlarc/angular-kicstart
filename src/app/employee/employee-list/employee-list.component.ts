import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'mobile', 'mail'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  mobile: number;
  mail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ellery Holmes', mobile: 989484998, mail: 'Holmes@hmail.com'},
  {position: 2, name: 'Yvette Carlson', mobile: 787879877, mail: 'Carlson@gmail.com'},
  {position: 3, name: 'Alec Meyer', mobile:878887887, mail: 'Meyer@gmail.com'},

];

