import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  } from 'events';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  alertStatus: BehaviorSubject<{content:string,  type:number, show:boolean}> = new BehaviorSubject<{content:string,  type:number, show:boolean}>({content:'testing', type:0, show:false})

  constructor() { }
  publishMessages(content: string,  type:number) {
    this.alertStatus.next({ content: content,  type: 0, show: true });
    setTimeout(() => {
      this.dismissMessage()
    }, 5000);
  }

  dismissMessage() {
    this.alertStatus.next({ content: '',  type: 0, show: false });
  }
}
