import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  formcontrol : FormControl = new FormControl
  @Input() type: string ='text'
  @Input() placeholder = ''
  @Input() required : boolean =false
  @Input() readonly: boolean =false
  

  constructor() { }

  ngOnInit(): void {
  }

}
