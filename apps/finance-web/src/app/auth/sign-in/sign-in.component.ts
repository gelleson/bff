import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from '@bff/frontend/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { TokenObject } from '../../../../../../libs/api/modules/src/lib/auth/dto/token.object';

@Component({
  selector: 'bff-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  host = environment.api;

  constructor(private httpClient: HttpClient, private sessionStore: SessionStore, private router: Router) { }

  ngOnInit(): void {
  }

  submit(e) {
    if (!e.hasOwnProperty('email')) return;

    const request = this.httpClient.post(`${this.host}/auth/sign-in`, {
      email: e.email,
      password: e.password
    });


    request.subscribe((token: TokenObject) => {
      this.sessionStore.logged(token.accessToken, token.firstName, token.lastName, token.email);

      this.router.navigate([''])
        .then();
    });
  }
}
