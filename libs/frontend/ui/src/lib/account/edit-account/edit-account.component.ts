import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzDrawerComponent } from 'ng-zorro-antd/drawer';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@bff/frontend/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IAccount } from '@bff/api/modules';

@Component({
  selector: 'bff-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  opened = false;

  form: FormGroup;

  @Input()
  account!: IAccount;

  @ViewChild('drawer')
  drawer: NzDrawerComponent;

  constructor(private fb: FormBuilder, private accountService: AccountService, private notifyService: NzMessageService) {


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(this.account.name, [Validators.required]),
      balance: new FormControl(this.account.balance, [Validators.required, Validators.min(0)]),
      currency: new FormControl(this.account.currency, [Validators.required])
    });
  }

  public taggle() {
    this.opened = !this.opened;
  }

  close() {
    this.drawer.close();
    this.opened = false;
  }

  save() {
    this.accountService.update(this.account.id, {
      name: this.form.get('name').value,
      balance: this.form.get('balance').value,
      currency: this.form.get('currency').value
    })
      .subscribe(() => {
        this.notifyService.success('Account was updated!');
        this.drawer.close();
      });
  }
}
