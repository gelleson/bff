import { Component, OnInit } from '@angular/core';
import { AccountQuery, AccountService, EventService, TransactionService } from '@bff/client/core';
import { IAccount, TransactionObject } from '@bff/api/modules';

@Component({
  selector: 'bff-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  accounts: IAccount[] = [];
  transactions: TransactionObject[] = [];
  currentTime = new Date();

  constructor(private accountService: AccountService, private transactionService: TransactionService,
              private accountQuery: AccountQuery, private eventService: EventService) {
    this.accountService
      .getAll()
      .subscribe();

    this.accountQuery
      .selectAll()
      .subscribe(accounts => this.accounts = accounts);

    this.transactionService.getTransactions(new Date())
      .subscribe(transactions => this.transactions = transactions.data);

    this.eventService
      .route('reload')
      .subscribe((event) => {
        this.accountService
          .getAll()
          .subscribe();

        this.transactionService.getTransactions(new Date())
          .subscribe(transactions => this.transactions = transactions.data);
      });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  getCurrentTime() {
    return this.currentTime.toISOString();
  }
}
