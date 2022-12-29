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



  constructor(private protectedService:ProtectedService) {
    
  }

  //we will intercept each page request and append http header with access token with each request

  ngOnInit(): void {
    this.protectedService.getAdminData().subscribe({
      next:(res)=>{
        console.log(res);
        console.log("from admin no error message")

      },
      error:(err)=>{
        console.log(err);
        console.log("message data");

      }
    })

  }

}
