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
      apiKey: "AIzaSyBueuKFLm1A1kHyR8a43Xrh2P0UWA0AgY0",
      authDomain: "bksolidaire.firebaseapp.com",
      databaseURL: "https://bksolidaire.firebaseio.com",
      projectId: "bksolidaire",
      storageBucket: "bksolidaire.appspot.com",
      messagingSenderId: "228635669391",
      appId: "1:228635669391:web:d0a6c3d4a68518141ad1fa"
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
