import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor( private matDialog : MatDialogRef <SuccessComponent>,
              private router : Router) { }

  ngOnInit(): void {
  }

  showAllRequest(){
    this.matDialog.close()
    this.router.navigateByUrl('/main/request/existing-users')
  }

}
