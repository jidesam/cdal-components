import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetPassword!: FormGroup
  constructor(private route: Router) { }

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
  forgotAndResetPassword(){
    if (this.resetPassword.valid) {
      this.route.navigateByUrl('/email-sent')
    }
  }
  clearForgotInput(controlName: string){
    this.resetPassword.patchValue({
      [controlName]: ''
    })
  }
}
