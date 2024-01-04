import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {title:'booking | home',path:'home',component:HomeComponent },
    {title:'booking | ticketList',path:'list',component:TicketListComponent },
    
];
