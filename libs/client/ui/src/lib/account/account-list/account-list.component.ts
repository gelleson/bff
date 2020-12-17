import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAccount } from '@bff/api/modules';
import { AccountService } from '@bff/client/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'bff-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, OnChanges {

  @Input()
  accounts: IAccount[] = [];

  @Input()
  loading: boolean;

  @Input()
  createAccountButton = false;

  @Input()
  enableActions = false;

  constructor(private accountService: AccountService, private messageService: NzMessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  delete(id: number) {
    this.accountService
      .delete(id)
      .subscribe(() => this.messageService.success('Account was deleted!'));
  }
}
