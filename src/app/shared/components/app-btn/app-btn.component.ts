import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss']
})
export class AppBtnComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() buttonText!: string;
  @Input() status!: string;
  @Input() buttonImage!: string;
  @Input() className!: string;
  @Input() overRideButtonClass!: boolean;
  @Input() loading!: boolean;
  @Input() customClass!: string;

  @Output() ngClass!: string;
  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  get getCustomClass(): string {
    return this.overRideButtonClass ? this.customClass: ''
  }

  handleClick(){
    this.buttonClick.emit(true)
  }
}
