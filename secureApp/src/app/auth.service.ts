import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient,private JWTHelper:JwtHelperService){}
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
    let url = "http://localhost:5235/api/auth/authenticate";
    return this.http.post<User>(url,user);
  }
  

  getRoleFromLSAToken():string {
    const token = localStorage.getItem("jwt");
    if(token){
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      const role = localStorage.setItem('Roles',decodedToken.Roles)
      return decodedToken.Roles;
    }
       return '';
    }

    getEmployeeIdFromToken():number{
      const token:any = localStorage.getItem("jwt");
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      return decodedToken.EmployeeId;
    }

    getShipperIdFromToken():number{
      const token:any = localStorage.getItem("jwt");
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      return decodedToken.ShipperId;
    }

    getCustomerIdFromToken():number{
      const token:any = localStorage.getItem("jwt");
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      return decodedToken.CustomerId;
    }
    
    getSupplierIdFromToken():number{
      const token:any = localStorage.getItem("jwt");
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      return decodedToken.SupplierId;
    }

    getAgridoctorIdFromToken():number{
      const token:any = localStorage.getItem("jwt");
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      return decodedToken.AgridoctorId;
    }

    getAdminIdFromToken():number{
      const token:any = localStorage.getItem("jwt");
      const decodedToken:any = this.JWTHelper.decodeToken(token);
      return decodedToken.id;
    }

}












