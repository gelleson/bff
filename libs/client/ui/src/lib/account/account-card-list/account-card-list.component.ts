import { Component, OnInit } from '@angular/core';
import { AccountQuery } from '@bff/client/core';

@Component({
  selector: 'bff-account-card-list',
  templateUrl: './account-card-list.component.html',
  styleUrls: ['./account-card-list.component.css']
})
export class AccountCardListComponent implements OnInit {

  constructor(public accountQuery: AccountQuery) { }

  ngOnInit(): void {
  }

}
