import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}
  // users : User []=[
  //   {
  //     'userName':'Pragati',
  //     'password':'password',
  //     'role':'Admin'
  //   },
  //   {
  //     'userName':'Rushikesh',
  //     'password':'password',
  //     'role':'User'
  //   },
  //   {
  //     'userName':'Akash',
  //     'password':'password',
  //     'role':'Admin'
  //   },
  //   {
  //     'userName':'Akashay',
  //     'password':'password',
  //     'role':'User'
  //   },
  //   {
  //     'userName':'Rohit',
  //     'password':'password',
  //     'role':'Admin'
  //   },
  // ]

  // isLogin = false;
  // loggedIn:any;
  // constructor() { }

  // logIn(userName:string,password:string):boolean{
  //   const user=this.users.find((u)=>u.userName ===userName && u.password===password)
  //   if(user){
  //     this.loggedIn=user;
  //     localStorage.setItem("role",user.role)
  //     return true;
  //   }
  //   return false;
  // }

  logIn(user:User):Observable<any>{
    let url = "http://localhost:5150/users/authenticate";
    return this.http.post<User>(url,user);
  }
}
