import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:User={email:'',
             password:''};
  role : any;
  loggedIn :Boolean=false;
  btnSignOut : Boolean=false;
  btnSignIn : Boolean=false;
  loginFormVisible : Boolean=true;
  validUser:Boolean=false;

  constructor(private svc :AuthService,private router:Router){}
  ngOnInit():void{
    this.loginFormVisible=false;
    this.btnSignIn=true;
  }

  logIn(){
    this.svc.logIn(this.user).subscribe((response)=>{
      localStorage.setItem("jwt",response.token);
      this.loggedIn=true;
      this.btnSignIn=false;
      this.loginFormVisible=false;
      this.validUser=true;
      console.log(this.validUser);
      const role =this.svc.getRoleFromLSAToken();
      console.log("role from token");
      console.log(role);

    });
    //this.router.navigate(['/routing']);
};


  login(){
    this.btnSignIn=false;
    this.btnSignOut=true;
    this.loginFormVisible=true;
  }

  logout(){
    this.loggedIn=false;
    this.btnSignIn=true;
    this.btnSignOut=false;
    this.loginFormVisible=false;
    this.validUser=false;
    localStorage.removeItem("jwt");
    localStorage.removeItem("Roles");
    this.router.navigate(['']);
  }
      
}


