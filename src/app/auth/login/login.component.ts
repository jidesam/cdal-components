import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordType = 'password';
  // passwordImgUrl = 'assets/images/eye.svg';
  loginAuth!: FormGroup

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initLoginForm()
  }
  initLoginForm(){
    this.loginAuth = new FormGroup ({
      password: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  submitLogin() {

  }

  subscriptionRoute(){
    if (this.loginAuth.valid) {
      this.route.navigateByUrl('/sub')
    }
  }
  toggleEye() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      // this.passwordImgUrl = 'assets/images/lock.svg';
    } else if (this.passwordType === 'text') {
      this.passwordType = 'password';
      // this.passwordImgUrl = 'assets/images/eye.svg';
    }
  }
  clearInput(controlName: string){
    this.loginAuth.patchValue({
      [controlName]: ''
    })
  }

}
