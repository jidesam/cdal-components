import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator} from './validator'

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  passwordType1 = 'password';
  passwordType2 = 'password';
  passwordImgUrl1 = 'assets/Images/eye.svg';
  passwordImgUrl2 = 'assets/Images/eye.svg';
  passwordChange!: FormGroup

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initNNewPasswordForm()
  }
  initNNewPasswordForm(){
    this.passwordChange = new FormGroup ({
      newPassword: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl ('', [Validators.required, Validators.minLength(4)])
    }, {validators: PasswordValidator})
  }
  savePassword() {
   
  }

  newPasswordNavigate(){
    if (this.passwordChange.valid) {
      this.route.navigateByUrl('/login')
    }
  }
  toggleEye1() {
    if (this.passwordType1 === 'password') {
      this.passwordType1 = 'text';
      // this.passwordImgUrl1 = 'assets/Images/lock.svg';
    } else if (this.passwordType1 === 'text') {
      this.passwordType1 = 'password';
      // this.passwordImgUrl1 = 'assetsImages/eye.svg';
    }
  }

  
  toggleEye2() {
    if (this.passwordType2 === 'password') {
      this.passwordType2 = 'text';
      // this.passwordImgUrl2 = 'assets/images/lock.svg';
    } else if (this.passwordType2 === 'text') {
      this.passwordType2 = 'password';
      // this.passwordImgUrl2 = 'assets/images/eye.svg';
    }
  }
}
