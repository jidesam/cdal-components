import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.scss']
})
export class ManagePlanComponent implements OnInit {
  benefits = [
    "10 Account Statement request ",
    "5 Balance Enquiry"
  ]

  standardBenefits = [
    "20 Account Statement request ",
    "10 Balance Enquiry"
  ]

  premiumBenefits = [
    "60 Account Statement request ",
    "30 Balance Enquiry"
  ]
  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  buyBasic(plan:string) {
    this.router.navigateByUrl(`/payment/${plan}`)
  }
}
