import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

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
    private router : Router,
    private notify : NotificationService

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
      expireDate : new FormControl('', [Validators.required, Validators.minLength(5)]),
      cvv : new FormControl('', [Validators.required])
    })

  }

  back() {
    this.location.back()
  }

  cardPayment() {
    this.notify.publishMessages("Payment has been sucessfully made. ", 0)
    this.router.navigateByUrl('/main')
  }
  bankTransfer(){
    this.notify.publishMessages("Payment has been sucessfully made. ", 0)
    this.router.navigateByUrl('/main')
    console.log(this.paymentForm.value)
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
