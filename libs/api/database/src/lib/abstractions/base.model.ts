import { classToPlain } from 'class-transformer';

export class BaseModel<T> {

  constructor(partial?: Partial<T>) {
    Object.assign(this, partial);
  }

  public toObject() {
    return classToPlain(this);
  }
}
