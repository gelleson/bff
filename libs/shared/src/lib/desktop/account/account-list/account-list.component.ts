import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccountObject } from '@bff/interface';
import { AccountService } from '@bff/frontend/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'bff-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, OnChanges {

  @Input()
  accounts: AccountObject[] = [];

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
