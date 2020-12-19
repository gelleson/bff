import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryStore } from '@bff/client/core';
import { BASE_URL } from '../../tokens';
import { ICategory } from '@bff/api/modules';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient,
    private categoryStore: CategoryStore
  ) {
  }

  getAll() {
    return this.http.get<ICategory[]>(`${this.baseUrl}/categories/`)
      .pipe(
        tap(categories => this.categoryStore.set(categories))
      );
  }

  create(name: string) {
    return this.http.post<ICategory>(`${this.baseUrl}/categories/`, { name: name })
      .pipe(
        tap(category => this.categoryStore.add(category))
      );
  }
}
