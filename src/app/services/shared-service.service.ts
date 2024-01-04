import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http:HttpClient) { }
  private url='https://freeapi.miniprojectideas.com/api/youtube/'

  createNewTicket=(ticket:any)=>{
    return this.http.post(this.url+"AddNewTicket",ticket)
  }

  getAllTickets=()=>{
    return this.http.get(this.url+'GetAllTickets')
  }
  getTodaysTickets=()=>{
    return this.http.get(this.url+'GetTodaysTickets')
  }
  getDashboardData=()=>{
    return this.http.get(this.url+'GetTicketsDashboard')
  }
  DeleteTicketByTicketId=(id:any)=>{
    return this.http.delete(this.url+'DeleteTicketByTicketId?ticketId='+id)
  }
}
