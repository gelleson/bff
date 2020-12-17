import { Component, OnInit } from '@angular/core';
import { AccountQuery, AccountService } from '@bff/client/core';
import { IAccount } from '@bff/api/modules';

@Component({
  selector: 'bff-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts: IAccount[];

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
