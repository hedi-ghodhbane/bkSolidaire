import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corona';
  constructor() {
    const config = {
      apiKey: "AIzaSyDdSk7REQpAK-skSRAqB0-PWgq3ASWFghI",
    authDomain: "solidaritegrombalia.firebaseapp.com",
    databaseURL: "https://solidaritegrombalia.firebaseio.com",
    projectId: "solidaritegrombalia",
    storageBucket: "solidaritegrombalia.appspot.com",
    messagingSenderId: "1051543752296",
    appId: "1:1051543752296:web:6b71112e2d0c02edbd75dd"
    };
    firebase.initializeApp(config);
}
ngOnInit(): void {
  firebase.auth().onAuthStateChanged((data)=>{
    console.log(`from on auth state change ${data}`)
    },(error)=>{
      console.log(error)
    });
}
}
