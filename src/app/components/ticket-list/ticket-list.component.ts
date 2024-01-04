import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit{

  isAll:boolean=true;
  isGride:boolean=true;
  tickets:any;
  constructor(private _shar:SharedServiceService){
  }

  onToggle=()=>{
    this.isAll=!this.isAll;
    if (this.isAll) {
      this.getAllTickets();
    } else {
      this.getTodaysTickets();
    }
  }

  ngOnInit(): void {
    this.onToggle()
  }

  getAllTickets=()=>{
    this._shar.getAllTickets().subscribe(
      res=>{
        this.tickets=res
      },
      err=>{
        console.error('error:: ',err);
        
      }
    )
  }
  getTodaysTickets=()=>{
    this._shar.getTodaysTickets().subscribe(
      res=>{
        this.tickets=res
      },
      err=>{
        console.error('error:: ',err);
        
      }
    )
  }

  DeleteTicketByTicketId=(id:any)=>{
    this._shar.DeleteTicketByTicketId(id).subscribe(
      res=>{
        this.ngOnInit();
        console.log('ticket Deleted Successfully');
        alert('ticket Deleted Successfully');
        
      },
      err=>{
        console.error('error:: ',err);
        alert('error:: '+err);
      }
    )
  }
}
