
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  private baseUrl = environment.baseURL;

  constructor(private http:HttpClient) { }



  getUserData(){
    return this.http.get(this.baseUrl+'/protected/getdata');
  }

  getAdminData(){
    return this.http.get(this.baseUrl+'/admin/getdata');
  }
}
