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
  errorMessage! : string

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
      expireDate : new FormControl('', [Validators.required, Validators.minLength(5)]),
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

  getInputValue(value : any){
    let date = value.target.value
    if (!(/^[0-9]+$/i.test(date))) {
      // it looks okay now
      console.log("not valid")
      this.errorMessage = "Input a valid card details"
  }else {
    this.errorMessage=""
  }
  
    if(value.inputType !== "deleteContentBackward") {
      if(date.length == 2 ) {
        value.target.value = date + '/'
      }
    }

  }

}
