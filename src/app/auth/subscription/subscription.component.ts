import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  basicHover : boolean = false
  standardHover : boolean = false
  premiumHover : boolean = false
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
  constructor(
    private router : Router,
  ) { }
  
  ngOnInit(): void {
  }

 
  mouseHoverEvent(data: string){
    if(data === "basic"){
      this.basicHover = true
    }else if( data === "standard") {
      this.standardHover = true
    }else if(data === "premium") {
      this.premiumHover = true
    }
  }
  buyBasic(plan:string) {
    this.router.navigateByUrl(`/payment/${plan}`)
  }

  mouseLeave(data: string){
    if(data === "basic"){
      this.basicHover = false
    }else if( data === "standard") {
      this.standardHover = false
    }else if(data === "premium") {
      this.premiumHover = false
    }
  }
}
