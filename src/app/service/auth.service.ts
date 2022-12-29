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
    sessionStorage.setItem('username',username);
  }

  addAccesToken(token:string){
    sessionStorage.setItem('token',token);
  }

  addReffressToken(refreshtoken:string){
    sessionStorage.setItem('rtoken',refreshtoken);
  }

  addEmail(email:string){
    sessionStorage.setItem('email',email);
  }

  getAccesToken(){
    return sessionStorage.getItem("token");
  }
  getRefreshToken(){
    return sessionStorage.getItem("rtoken");
  }
  getEmail(){
    return sessionStorage.getItem("email");
  }
  getUsername(){
    return sessionStorage.getItem("username");
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
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rtoken");
    this.router.navigate(["/login"]);
    sessionStorage.clear();
  }



}
