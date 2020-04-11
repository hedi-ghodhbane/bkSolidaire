import { Component, OnInit, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
   isAuth : boolean ;
   enabled:boolean;
  constructor(private router: Router,private auth:AuthService) { }
  ngOnInit() {
    console.log("hello");
    if(this.auth.isLogged()){
      this.router.navigate(['/main']);
    }
  }
  login(e,email:HTMLInputElement,password: HTMLInputElement ){
    e.preventDefault();
    this.auth.login(email.value,password.value);

  }

}
