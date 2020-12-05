export class PageQuery {
  date: string | Date;
  page? = 1;
  pageSize = 100;

  public getDate(): Date {
    if (!this.date) return new Date();
    return new Date(this.date);
  }

  public getPage(): number {
    if (this.page === 1 || this.page === 0) {
      return 0;
    }

    return this.page * this.pageSize;
  }

  public getPageNumber(): number {
    return this.page;
  }

  public getSize() {
    return this.pageSize;
  }
}
