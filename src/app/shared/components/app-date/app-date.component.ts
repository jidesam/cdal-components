import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-app-date',
  templateUrl: './app-date.component.html',
  styleUrls: ['./app-date.component.scss']
})
export class AppDateComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() class!: string;
  @Input() invalid!: any;
  @Input() pattern!: string;
  @Input() minlength: string | number | null = null;
  @Input() value?: string;
  errorMessage! : string
  errorMessage2!: string;
  errorMessage3!: string;
  currentYear = new Date()
  year = String(this.currentYear.getFullYear()).slice(-2)
  constructor() { }

  ngOnInit(): void {
  }

  getInputValue(value : any){
    let date = value.target.value
    let month = date.substring(0, 2)
    let year = date.slice(-2)
    if( Number(year) < Number(this.year)) {
      this.errorMessage3 = "Please input a valid year"
    }else {
      this.errorMessage3 = ""
    }
    if(Number(month) > 12 ) {
      this.errorMessage2 ="Please input a valid"
    }else {
      this.errorMessage2 =""
    } 
    if (!(/^[0-9]|[\-]+$/i.test(date))) {
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
