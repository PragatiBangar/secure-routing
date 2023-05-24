import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
 
  role=localStorage.getItem("Roles");
  
  statusAdmin:Boolean=false;
  statusCustomer:Boolean=false;
  statusEmployee:Boolean=false;
  statusSupplier:Boolean=false;
  statusShipper:Boolean=false;
  statusAgridoctor:Boolean=false;
  statusEmployeeCustomer:Boolean=false;
 
  ngOnInit(): void {

    console.log(this.role);

    if (this.role=="Admin"){
      this.statusAdmin=true;
      alert("role is admin");
    }
    if (this.role=="Customer"){
      this.statusCustomer=true;
    }
    if (this.role=="Employee"){
      this.statusEmployee=true;
    }
    if (this.role=="Customer,Employee"){
      this.statusEmployeeCustomer=true;
      console.log(this.statusEmployeeCustomer);
    }
    if (this.role=="Supplier"){
      this.statusSupplier=true;
    }
    if (this.role=="Shipper"){
      this.statusShipper=true;
    }
    if (this.role=="Agridoctor"){
      this.statusAgridoctor=true;
    }
  }
}
