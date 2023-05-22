import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userName:string | any;
  password:string | any;
  role : any;
  loggedIn :any;
  
  constructor(private svc :AuthService,private router:Router){}

  ngOnInit():void{
  }
  
  onLogin(){
    if(this.svc.logIn(this.userName,this.password)){
      console.log("login successfull");
      this.loggedIn = true; 
      console.log("user is valid");
      this.router.navigate(['/routing']); 
      return true;
    }
    else{
      console.log("login failed");
      return false;
    }
  }
}
