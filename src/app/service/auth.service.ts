import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isLoggedIn(){
    return !!this.getAccesToken() && !this.isTokenExpired();
  }

  addUsername(username:string){
    localStorage.setItem('username',username);
  }

  addAccesToken(token:string){
    localStorage.setItem('token',token);
  }

  addReffressToken(refreshtoken:string){
    localStorage.setItem('rtoken',refreshtoken);
  }

  addEmail(email:string){
    localStorage.setItem('email',email);
  }

  getAccesToken(){
    return localStorage.getItem("token");
  }
  getRefreshToken(){
    return localStorage.getItem("rtoken");
  }
  getEmail(){
    return localStorage.getItem("email");
  }
  getUsername(){
    return localStorage.getItem("username");
  }
  // getAccesToken(){
  //   return localStorage.getItem("token");
  // }

  //check expiration of our token

  isTokenExpired(){
    const token: string=this.getAccesToken()??"";
        if(!token)
          return false;
        const tokenSplit:string=token.split('.')[1];
        const decodedString:string=atob(tokenSplit);
        const jsonString=JSON.parse(decodedString);
        const expiry = (jsonString).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;

  }

  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("rtoken");
    this.router.navigate(["/login"]);
    // localStorage.clear();
  }



}
