import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountersComponent } from './counters.component';

const routes: Routes = [
  {
    path:'counter-list',
    component:CountersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
