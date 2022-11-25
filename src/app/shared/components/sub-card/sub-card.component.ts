import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-card',
  templateUrl: './sub-card.component.html',
  styleUrls: ['./sub-card.component.scss']
})
export class SubCardComponent implements OnInit {
  @Input() amount! : string
  @Input() plan! : string
  @Input() benefits! : any
  @Input() hasFeature : boolean = false 
  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  handleClick(){
    this.buttonClick.emit(true)
  }
}
