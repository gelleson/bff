import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { SessionQuery } from '../state';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {

  constructor(private sessionQuery: SessionQuery) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    if (this.sessionQuery.getSession()) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.sessionQuery.getSession().token}`
        }
      })
    }


    return next.handle(request);
  }
}
