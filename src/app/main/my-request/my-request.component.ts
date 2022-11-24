import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.scss']
})
export class MyRequestComponent implements OnInit {
  img = "assets/Images/my-request/plus.svg"
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newRequest(){
  this.router.navigateByUrl (`main/request-customer-data`)
  }

}
