import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  username:string=this.authService.getUsername()??"";

  email:string = this.authService.getEmail()??"";
  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
  }

  logout(){
    console.log("logout");
    this.authService.logout();

  }

}
