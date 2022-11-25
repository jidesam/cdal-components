import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-customer-data',
  templateUrl: './request-customer-data.component.html',
  styleUrls: ['./request-customer-data.component.scss']
})
export class RequestCustomerDataComponent implements OnInit {
  newRequestForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initNewRequestForm()
  }

  initNewRequestForm(){
    this.newRequestForm = new FormGroup({
      bankVerificationNumber: new FormControl ('', [Validators.required]),
      phoneNumber: new FormControl ('', [Validators.required]),
      firstName: new FormControl ('', [Validators.required]),
      middleName: new FormControl ('', [Validators.required]),
      lastName: new FormControl ('', [Validators.required]),
      emailAddress: new FormControl ('', [Validators.required]),
      statementOfAccount: new FormControl ('', [Validators.required]),
      accountBalanceInfo: new FormControl ('', [Validators.required])
      
    })
  }
  

}
