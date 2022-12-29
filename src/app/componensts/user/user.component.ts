import { Component, OnInit } from '@angular/core';
import { ProtectedService } from '../../service/protected.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private protectedService:ProtectedService) { }

  //we will intercept each page request and append http header with access token with each request

  ngOnInit(): void {
    this.protectedService.getUserData().subscribe({
      next:(res)=>{
        console.log(res);

      },
      error:(err)=>{
        console.log(err);

      }
    })

  }

}
