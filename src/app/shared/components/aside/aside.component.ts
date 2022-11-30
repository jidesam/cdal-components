import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from '../../modals/logout/logout.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

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
