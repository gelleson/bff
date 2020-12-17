import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDrawerComponent } from 'ng-zorro-antd/drawer';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@bff/client/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'bff-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  opened = false;

  form: FormGroup;

  @ViewChild('drawer')
  drawer: NzDrawerComponent;

  constructor(private fb: FormBuilder, private accountService: AccountService, private notifyService: NzMessageService) {

    this.form = fb.group({
      name: new FormControl('', [Validators.required]),
      balance: new FormControl(0, [Validators.required, Validators.min(0)]),
      currency: new FormControl('KZT', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public taggle() {
    this.opened = !this.opened;
  }

  close() {
    this.drawer.close();
    this.opened = false;
  }

  save() {
    this.accountService.create({
      name: this.form.get('name').value,
      balance: this.form.get('balance').value,
      currency: this.form.get('currency').value
    })
      .subscribe(() => {
        this.notifyService.success('Account was created!');
        this.drawer.close();
      });
  }
}
