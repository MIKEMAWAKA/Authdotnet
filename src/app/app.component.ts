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
  roles = "User";


  constructor(private router:Router,private authService:AuthService) {
    authService.getUserRole();
    console.log( `User role :${authService.getUserRole()}`)
   }

  isLoggedIdn:boolean;

  checkloggedInUser(){
    this.isLoggedIdn= this.authService.isLoggedIn();
    this.roles = this.authService.getUserRole();
  }

  logout(){
    console.log("logout");
    this.authService.logout();

  }
}
