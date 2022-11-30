import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private matDialogRef : MatDialogRef<LogoutComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.matDialogRef.close()
  }

}
