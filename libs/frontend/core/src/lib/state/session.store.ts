import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { Session } from './session.model';


export interface CurrentSession {
  token: string,
  firstName: string,
  lastName: string,
  email: string
}

export interface SessionState extends EntityState<Session> {
  ui: CurrentSession
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'session'
})
export class SessionStore extends EntityStore<SessionState> {
  ui: EntityUIStore<CurrentSession>;

  constructor() {
    super({
      ui: {
        token: '',
        firstName: '',
        lastName: '',
        email: ''
      }
    });
  }

  logged(token: string, firstName: string, lastName: string, email: string) {
    this.update({
      ui: {
        token: token,
        firstName: firstName,
        lastName: lastName,
        email: email
      }
    });
  }

  logout() {
    this.update({
      ui: {
        token: '',
        firstName: '',
        lastName: '',
        email: ''
      }
    });
  }
}
