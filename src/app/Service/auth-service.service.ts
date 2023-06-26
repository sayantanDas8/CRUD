import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthClass } from '../Class/auth-class';
import { LoginClass } from '../Class/login-class';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  register_url: string = 'https://wtsacademy.dedicateddevelopers.us/api/user/signup'
  login_url: string = 'https://wtsacademy.dedicateddevelopers.us/api/user/signin'

  constructor(private http: HttpClient) { }

  // registration
  registration(formData:any):Observable<AuthClass[]>{
    return this.http.post<AuthClass[]>(this.register_url,formData);
  }

  //login
  login(formData: any):Observable<LoginClass[]>{
    return this.http.post<LoginClass[]>(this.login_url,formData);
  }
}
