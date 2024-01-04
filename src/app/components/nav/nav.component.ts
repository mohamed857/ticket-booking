import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  dashboardData:any;
constructor(private _shar:SharedServiceService){}

ngOnInit(): void {
  this.getDashboardData();
}

getDashboardData=()=>{
  this._shar.getDashboardData().subscribe(
    res=>{
      this.dashboardData=res;
    },
    err=>{
      console.error('error:: ',err);
      
    }
  )
}



}
