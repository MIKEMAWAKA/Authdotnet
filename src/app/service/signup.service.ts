import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignupReqModel } from '../models/signup-req-model';
import { LoginReqModel, LoginResponseModel } from '../models/loginrequestmodel';
import { ChangePassword } from '../models/changepasswordmodel';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = environment.baseURL;

  constructor(private http:HttpClient) { }



  login(model:LoginReqModel){
    return this.http.post<LoginResponseModel>(this.baseUrl+'/Authorization/login',model);


  }

  signup(model:SignupReqModel){
    return this.http.post<Status>(this.baseUrl+'/Authorization/registration',model);

  }

  changePassword(model:ChangePassword){

    return this.http.post<Status>(this.baseUrl+'/Authorization/changepassword',model);

  }
}
