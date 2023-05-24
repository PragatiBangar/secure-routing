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
  loggedIn :any;
  
  constructor(private svc :AuthService,private router:Router){}

  ngOnInit():void{
  }
  
  validUser:boolean=false;

  logIn(){
    this.svc.logIn(this.user).subscribe((response)=>{
      localStorage.setItem("jwt",response.token);
      if(this.user){
        this.validUser=true;
      }
      const role = this.svc.getRoleFromToken();
      console.log(role);
      if(role=="Employee"){
        const EmployeeId = this.svc.getEmployeeIdFromToken();
        console.log(EmployeeId);
      }
      if(role=="Shipper"){
        const EmployeeId = this.svc.getShipperIdFromToken();
        console.log(EmployeeId);
      }
      if(role=="Supplier"){
        const SupplierId = this.svc.getSupplierIdFromToken();
        console.log(SupplierId);
      }
      if(role=="Customer"){
        const CustomerId = this.svc.getCustomerIdFromToken();
        console.log(CustomerId);
      }
      if(role=="Agridoctor"){
        const AgridoctorId = this.svc.getAgridoctorIdFromToken();
        console.log(AgridoctorId);
      }
      if(role=="Admin"){
        const id = this.svc.getAdminIdFromToken();
        console.log(id);
      }
    })
  }
}


