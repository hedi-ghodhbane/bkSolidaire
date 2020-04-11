import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'main',component:MainComponent
//  ,canActivate:[AuthGuard]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
