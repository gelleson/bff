import { Injectable } from '@angular/core';
import { EntityUIStore, QueryEntity } from '@datorama/akita';
import { SessionStore, SessionState, CurrentSession } from './session.store';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SessionQuery extends QueryEntity<SessionState> {

  constructor(protected store: SessionStore) {
    super(store);
  }

  currentSession(): Observable<CurrentSession> {
    return this.select(state => state.ui);
  }

  getSession(): CurrentSession | null {

    if(this.store.getValue().ui.token === '') {
      return null
    }

    return this.store.getValue().ui;
  }

  logged$() {
    return this.select(state => state.ui.token !== '');
  }

  token$() {
    return this.select(state => state.ui.token);
  }
}
