import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
 
  token=localStorage.getItem("jwt");
  status:Boolean=true;

  ngOnInit(): void {
  console.log(this.token);
  if(this.token==null){
      this.status=false;
  }
    
  }
}
