import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ProtectedService } from 'src/app/service/protected.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private router:Router,private authService:AuthService,private protectedService:ProtectedService) { }

  username:string=this.authService.getUsername()??"";

  email:string = this.authService.getEmail()??"";
  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
  }

}
