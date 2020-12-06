import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionQuery } from '@bff/frontend/core';
import { map } from 'rxjs/operators';

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
