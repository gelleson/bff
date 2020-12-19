import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../tokens';
import { ISignIn, IToken, IUserCreate } from '@bff/api/modules';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseEndpoint = `${this.url}/auth`;

  constructor(@Inject(BASE_URL) private url: string, private http: HttpClient) {
  }

  public signIn(input: ISignIn) {
    return this.http.post<IToken>(`${this.baseEndpoint}/sign-in`, input);
  }

  public signUp(input: IUserCreate) {
    return this.http.post<IToken>(`${this.baseEndpoint}/sign-up`, input);
  }
}
