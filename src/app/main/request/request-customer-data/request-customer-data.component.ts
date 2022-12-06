import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/shared/modals/success/success.component';
@Component({
  selector: 'app-request-customer-data',
  templateUrl: './request-customer-data.component.html',
  styleUrls: ['./request-customer-data.component.scss']
})
export class RequestCustomerDataComponent implements OnInit {
  newRequestForm!: FormGroup;
  constructor(
    private route: Router,
    private matDialog : MatDialog
   
  ) { } 

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
  
  customerTable(){
    this.matDialog.open(SuccessComponent)
    
  }

}
