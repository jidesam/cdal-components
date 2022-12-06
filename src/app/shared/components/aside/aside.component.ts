
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() showUpgradePlans : boolean = false

  @Output() logOutFunction = new EventEmitter

  constructor(
    private router : Router,
    private matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  upgradePlan() {
    this.router.navigateByUrl("/main/plans/upgrade-plan")
  }

  onclickLogOut(){

    this.logOutFunction.emit()
    // this.matDialog.open(LogoutComponent)
  }
  
}
function output() {
  throw new Error('Function not implemented.');
}

