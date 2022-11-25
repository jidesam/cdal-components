import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetPassword!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.initForgotPasswordForm()
  }
  initForgotPasswordForm(){
    this.resetPassword = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  forgotPassword(){

  }
  clearForgotInput(controlName: string){
    this.resetPassword.patchValue({
      [controlName]: ''
    })
  }
}
