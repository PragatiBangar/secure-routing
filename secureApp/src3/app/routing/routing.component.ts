import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
 
  role=localStorage.getItem("role");

  statusAkash=false;
  statusRushikesh=false;

  ngOnInit(): void {
    if (this.role=="Admin"){
      this.statusAkash=true;
    }
    if (this.role=="User"){
      this.statusRushikesh=true;
    }
  }
}
