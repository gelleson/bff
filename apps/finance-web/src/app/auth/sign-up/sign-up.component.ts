import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from '@bff/frontend/core';
import { Router } from '@angular/router';
import { TokenObject } from '../../../../../api/src/app/auth/dto/token.object';

@Component({
  selector: 'bff-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  host = environment.api;

  constructor(private httpClient: HttpClient, private sessionStore: SessionStore, private router: Router) { }

  ngOnInit(): void {
  }

  submit(e) {
    if (!e.hasOwnProperty('email')) return;

    const request = this.httpClient.post(`${this.host}/auth/sign-up`, {
      firstName: e.firstname,
      lastName: e.lastname,
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
