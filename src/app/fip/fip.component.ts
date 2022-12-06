import { Component, OnInit } from '@angular/core';
import { NavLinks } from '../shared/components/nav-links';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../shared/modals/logout/logout.component';

@Component({
  selector: 'app-fip',
  templateUrl: './fip.component.html',
  styleUrls: ['./fip.component.scss']
})
export class FipComponent implements OnInit {

  navlink : NavLinks [] = [
    {
      link : 'Data Request',
      routes: '',
      activeIcon : '',
      icon : ''
    },
     {
      link : 'Report',
      routes: '/fip/generate-report',
      activeIcon : '',
      icon : ''
    }
  ]

  constructor( private matDialog : MatDialog) { }

  ngOnInit(): void {
  }
  logOutModal(){
     this.matDialog.open(LogoutComponent)
  }

}
