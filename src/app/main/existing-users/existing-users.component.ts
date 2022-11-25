import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-users',
  templateUrl: './existing-users.component.html',
  styleUrls: ['./existing-users.component.scss']
})
export class ExistingUsersComponent implements OnInit {
  btnImg ='assets/Images/my-request/plus.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
