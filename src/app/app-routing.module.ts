import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(home => home.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(user => user.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
