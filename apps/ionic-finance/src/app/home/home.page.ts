import { Component, OnInit } from '@angular/core';
import { AccountService } from '@bff/client/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService
      .getAll()
      .subscribe();
  }

}
