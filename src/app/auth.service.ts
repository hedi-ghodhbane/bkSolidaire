import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      (user)=>{
        console.log(user);
        if(user){
          console.log("hello")
          this.router.navigate(['/main']);
        }
      },
      (error)=>{
        console.log(error);
        alert(error.message);
      })
  }
  logout(){
    firebase.auth().signOut().then(
      ()=>{
        this.router.navigate(['/']);
      },
      (error)=>{
console.log(error)
      }
    );
  }
  isLogged(){
    let user =firebase.auth().currentUser ;
    console.log("user issss   " + user)
    if(user){
      return true;
    }
    return false ;
  }
  constructor(private router:Router) { }
}
