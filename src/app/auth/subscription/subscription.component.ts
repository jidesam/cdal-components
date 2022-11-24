import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  benefits = [
    "10 Account Statement request ",
    "5 Balance Enquiry"
  ]

  standardBenefits = [
    "20 Account Statement request ",
    "10 Balance Enquiry"
  ]

  premiumBenefits = [
    "60 Account Statement request ",
    "30 Balance Enquiry"
  ]
  constructor() { }
  
  ngOnInit(): void {
  }

}
