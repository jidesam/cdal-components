import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from '../../modals/logout/logout.component';
import { NavLinks } from '../nav-links';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() navLink! : NavLinks[] 
  
  constructor(
    private router : Router,
    private matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  upgradePlan() {
    this.router.navigateByUrl("/main/plans/upgrade-plan")
  }

  openLogoutModal(){
    this.matDialog.open(LogoutComponent)
  }
  
}
