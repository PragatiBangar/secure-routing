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
  signout : Boolean=false;
  signin : Boolean=false;
  status : Boolean=false;

  constructor(private svc :AuthService,private router:Router){}
  ngOnInit():void{
  }

  logIn(){
    this.svc.logIn(this.user).subscribe((response)=>{
      localStorage.setItem("jwt",response.token);
      this.loggedIn=true;
      this.signout=true;
    })
  }

  login(){
    this.signin=true;
    this.status=true;
  }

  logout(){
    this.loggedIn=false;
    this.signin=false;
    this.signout=false;
    this.status=false;
    localStorage.removeItem('jwt');
    localStorage.removeItem("Roles");
    this.router.navigate(['']);
  }
      
}


