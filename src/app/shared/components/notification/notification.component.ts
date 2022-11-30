import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationsComponent implements OnInit {
  notification : any
  constructor(
    private notify : NotificationService
  ) { }

  ngOnInit(): void {
    this.notify.alertStatus.subscribe((res)=> {
      this.notification = res
    })
  }

  dismiss(){
    this.notify.dismissMessage()
  }
  cancelNotification(){
    this.notify.dismissMessage()
  }
}