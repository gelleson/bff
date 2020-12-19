export abstract class PartialBase<T> {

  constructor(partial?: Partial<T>) {
    Object.assign(this, partial);
  }
}
