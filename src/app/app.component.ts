import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Authdotnet';


  constructor(private router:Router,private authService:AuthService) { }

  isLoggedIdn:boolean;

  checkloggedInUser(){
    this.isLoggedIdn= this.authService.isLoggedIn();
  }

  logout(){
    console.log("logout");
    this.authService.logout();

  }
}
