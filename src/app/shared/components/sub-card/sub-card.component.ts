import { Component, OnInit, Input, Output } from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
  }

}
