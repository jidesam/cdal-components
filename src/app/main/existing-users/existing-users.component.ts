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
  
  customerDetails = [
    {
      index: 1,
      customerDetails : 'Adekunle Ibraheem',
      date: 'April 28 2022',
      statusOfRequest: 'Granted'
    },
     {
      index: 2,
      customerDetails : 'Adekunle Ibraheem',
      date: 'April 28 2022',
      statusOfRequest: 'Pending'
    },
     {
      index: 3,
      customerDetails : 'Adekunle Ibraheem',
      date: 'April 28 2022',
      statusOfRequest: 'Rejected'
    },
     {
      index: 4,
      customerDetails : 'Adekunle Ibraheem',
      date: 'April 28 2022',
      statusOfRequest: 'Pending'
    },
     {
      index: 5,
      customerDetails : 'Adekunle Ibraheem',
      date: 'April 28 2022',
      statusOfRequest: 'Granted'
    },
     {
      index: 6,
      customerDetails : 'Adekunle Ibraheem',
      date: 'April 28 2022',
      statusOfRequest: 'Granted'
    },

  ]

}
