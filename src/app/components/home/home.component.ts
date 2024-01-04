import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newTicket :any= {
    "ticketId": 0,
    "customerName": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "state": "",
    "pincode": "",
    "reference": "",
    "adultCount": 0,
    "childCount": 0,
    "adultRate": 0,
    "childRate": 0,
    "totalAmount": 0,
    "discountInPercent": null,
    "finalAmount": 0,
    "ticketDate": new Date(),
    "ticketNo": ""
  }
  otherRef = '';

  constructor(private _shar: SharedServiceService) { }
  createNewTicket = () => {
    if (this.newTicket.reference=='Other') {
      this.newTicket.reference=this.otherRef;
    }
    this._shar.createNewTicket(this.newTicket).subscribe(
      res => {
        alert('ticket created successfully')
        console.log('ticket created successfully');
        this.newTicket = {
          "ticketId": 0,
          "customerName": "",
          "mobileNo": "",
          "email": "",
          "city": "",
          "state": "",
          "pincode": "",
          "reference": "",
          "adultCount": 0,
          "childCount": 0,
          "adultRate": 0,
          "childRate": 0,
          "totalAmount": 0,
          "discountInPercent": null,
          "finalAmount": 0,
          "ticketDate": new Date(),
          "ticketNo": ""
        }
        this.otherRef = '';
      },
      err => {
        alert("error:: " + err);
        console.error("error:: ", err);

      }
    );
  }
  

  calculateticketAmount = () => {
    const totalAmt = (Number(this.newTicket.adultRate) * Number(this.newTicket.adultCount)) + (Number(this.newTicket.childRate) * Number(this.newTicket.childCount));
    this.newTicket.totalAmount = totalAmt;
    if (this.newTicket.discountInPercent != null && this.newTicket.discountInPercent != 0) {
      this.newTicket.finalAmount = totalAmt-(totalAmt * (Number(this.newTicket.discountInPercent) / 100));
    }
    else
      this.newTicket.finalAmount = totalAmt;
  }
}
