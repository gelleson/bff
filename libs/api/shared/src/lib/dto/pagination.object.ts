import { Expose } from 'class-transformer';

export class PaginationObject<T> {
  @Expose()
  page: number;
  @Expose()
  total: number;
  @Expose()
  data: T[];

  constructor(page: number, data: T[]) {
    this.page = page;
    this.data = data;
    this.total = data.length;
  }
}
