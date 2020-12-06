import { Component, OnInit } from '@angular/core';
import { AccountQuery, AccountService } from '@bff/frontend/core';
import { AccountObject } from '@bff/interface';

@Component({
  selector: 'bff-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts: AccountObject[];

  constructor(private accountService: AccountService, private accountQuery: AccountQuery) {
    this.accountService.getAll()
      .subscribe()

    this.accountQuery
      .selectAll()
      .subscribe(accounts => this.accounts = accounts)
  }

  ngOnInit(): void {
  }

}
