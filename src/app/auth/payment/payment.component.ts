import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payWithTransfer : boolean = false
  payWithCard : boolean = true
  planAmount! : string 
  paymentBtnText! : string
  paymentForm! : FormGroup

  constructor(
    private location: LocationStrategy,
    private activatedRoute : ActivatedRoute,
    private router : Router

  ) { }

  ngOnInit(): void {
    const plan = this.activatedRoute.snapshot.paramMap.get("plan")
    if(plan === "basic") {
      this.planAmount = "₦ 10,000"
    }else if(plan === "standard") {
      this.planAmount = "₦ 20,000"
    }
    else if(plan === "premium") {
      this.planAmount = "₦ 50,000"
    }

    this.paymentBtnText = `Pay ${this.planAmount}`

    this.paymentForm = new FormGroup ({
      cardNumber: new FormControl('', [Validators.required]),
      expireDate : new FormControl('', [Validators.required]),
      cvv : new FormControl('', [Validators.required])
    })

  }

  back() {
    this.location.back()
  }

  paymentSuccess() {
    this.router.navigateByUrl('/main')
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
