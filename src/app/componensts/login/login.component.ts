import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';
import { Status } from '../../models/status';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frm!:FormGroup;
  status!:Status;

  get f(){
    return this.frm.controls;
    // needed for validation in html file
  }

  constructor(private signup:SignupService,private fb:FormBuilder,
    private auth:AuthService,private router:Router) { }



  onPost(){
    this.status = {statusCode:0,message:"Please wait..."}
    console.log(this.frm.value);
    this.signup.login(this.frm.value)
     .subscribe({
      next:(res)=>{
        console.log(res);
        this.frm.reset;
        this.status.statusCode = res.statusCode;
        this.status.message = res.message;
        console.log(this.frm.value['username']);
        if(res.statusCode==1){
          this.auth.addAccesToken(res.token);
          this.auth.addReffressToken(res.refreshToken);
          this.auth.addUsername(res.username);
           this.auth.addEmail(res.email);

          console.log(res);
          console.log(this.frm.value['username']);
          this.router.navigate(['/dashboard']);

          // this.auth.(res.token);
          // this.auth.addAccesToken(res.token);
          // this.auth.addAccesToken(res.token);
        }


      },
      error:(err)=>{
        console.log(err);
        this.status.statusCode = 0;
        this.status.message = "Some errot on server sider";

      }
     });


  }

  ngOnInit(): void {
    sessionStorage.setItem('mike', "Jacobooooooo");
    this.frm  = this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]

    })
    console.log(this.auth.isLoggedIn())
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }


  }

}
