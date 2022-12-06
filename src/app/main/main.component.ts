import { Component, OnInit } from '@angular/core';
import { NavLinks } from '../shared/components/nav-links';

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

  
constructor() { }

  ngOnInit(): void {
  }

}
