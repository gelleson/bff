import { Component } from '@angular/core';
import { AccountService, SessionQuery, SessionStore } from '@bff/client/core';
import { CurrentSession } from '@bff/client/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'finance-web';

  session: CurrentSession;

  constructor(public sessionQuery: SessionQuery, private accountService: AccountService,
              private sessionStore: SessionStore, private router: Router) {

    accountService
      .getAll()
      .subscribe()
  }

  public logout() {
    this.sessionStore.logout();
    this.router.navigate(['auth', 'sign-in'])
      .then();
  }
}
