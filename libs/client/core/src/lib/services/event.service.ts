import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventPayload } from '../dto/event.payload';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  protected subject = new Subject();
  private events = this.subject.asObservable();

  constructor() { }

  dispatch<T>(key: string, event: T) {
    this.subject.next({
      routingKey: key,
      payload: event
    });
  }

  route<T>(key: string) {
    return this.events
      .pipe(
        filter((event: EventPayload<T>) => {
          return event.routingKey === key;
        }),
        map(event => event.payload)
      )
  }
}
