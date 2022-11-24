import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payWithTransfer : boolean = false
  payWithCard : boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  selectPayWithTransfer() {
    this.payWithTransfer = true
    this.payWithCard = false
  }

  selectPayWithCard() {
    this.payWithCard = true
    this.payWithTransfer = false
  }

}
