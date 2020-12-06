export interface EventPayload<T> {
  routingKey: string;
  payload: T;
}
