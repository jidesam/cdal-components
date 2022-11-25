import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upgrade-plan-card',
  templateUrl: './upgrade-plan-card.component.html',
  styleUrls: ['./upgrade-plan-card.component.scss']
})
export class UpgradePlanCardComponent implements OnInit {
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
