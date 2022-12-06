import { Component, OnInit } from '@angular/core';
import { NavLinks } from '../shared/components/nav-links';
import { LogoutComponent } from '../shared/modals/logout/logout.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  navlink :NavLinks []  = [
    {
      link: 'My request',
      routes: '/main/request',
      activeIcon: '',
      icon: ''
    },
      {
      link: 'Manage plan',
      routes: '/main/plans',
      activeIcon: '',
      icon: ''
    },
      {
      link: 'Consent',
      routes: '/main/consent',
      activeIcon: '',
      icon: ''
    }
  ]
   

  
constructor( private matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  logOutModal(){
    this.matDialog.open(LogoutComponent)
  }

}
