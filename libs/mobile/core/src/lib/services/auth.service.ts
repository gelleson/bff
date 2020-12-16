import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInput, TokenObject, UserCreateInput } from '@bff/api/modules';
import { BASE_URL } from '../tokens/base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(@Inject(BASE_URL) readonly baseUrl: string, private http: HttpClient) {
  }

  public signIn(input: LoginInput) {
    return this.http.post<TokenObject>(`${this.baseUrl}/auth/sign-in`, input);
  }

  public signUp(input: UserCreateInput) {
    return this.http.post<TokenObject>(`${this.baseUrl}/auth/sign-up`, input);
  }
}
