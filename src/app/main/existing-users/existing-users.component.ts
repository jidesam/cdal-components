import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-existing-users',
  templateUrl: './existing-users.component.html',
  styleUrls: ['./existing-users.component.scss']
})
export class ExistingUsersComponent implements OnInit {
  btnImg ='assets/Images/my-request/plus.svg'
  showSort : boolean = false

  @ViewChild('sortbyDIv') private sortbyDIv! : ElementRef
  @ViewChild('sortBy') private sortBy! : ElementRef

  constructor(private render : Renderer2) {
    // this.render.listen('window', 'click', (e:Event)=>{
    //   if (e.target !== this.sortbyDIv?.nativeElement && e.target !== this.sortBy?.nativeElement){
    //     this.showSort = false
    //   }
    // })
   }

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
