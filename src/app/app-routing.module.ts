import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeModule } from './employee/employee.module';


const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(aut => aut.AuthModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(emp => emp.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
