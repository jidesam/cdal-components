import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consent-table',
  templateUrl: './consent-table.component.html',
  styleUrls: ['./consent-table.component.scss']
})
export class ConsentTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customerData = [
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17',
      consentStatus : 'Fulfiled'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17 ',
      consentStatus : 'Fulfiled'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17 ',
      consentStatus : 'Fulfiled'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17  ',
      consentStatus : 'pending'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17  ',
      consentStatus : 'pending'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17 ',
      consentStatus : 'pending'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17 ',
      consentStatus : 'Fulfiled'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17 ',
      consentStatus : 'pending'
    },
    {
      customerName : 'Adekunle, Ibrahim',
      typeOfData : 'Bank Statement',
      customerAccountNo : 91067145670,
      validityPeriod : 'April 17  - Dec 20 2022',
      consentDate : 'April 17 ',
      consentStatus : 'Fulfiled'
    }
  ]
}
