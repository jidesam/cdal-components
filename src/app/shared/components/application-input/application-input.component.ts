import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-application-input',
  templateUrl: './application-input.component.html',
  styleUrls: ['./application-input.component.scss']
})
export class ApplicationInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl;
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() required: boolean = false
  @Input() readonly: boolean = false 
  @Input() class!: string
  @Input() errorMessage: string = ''
  @Input() invalid!: any;
  @Input() value?: string;
  constructor() { }

  ngOnInit(): void {
  }

  displayErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

}
