import { ID } from '@datorama/akita';
import { ICategory } from '@bff/api/modules';

export interface Category extends ICategory {
  id: number;
}

export function createCategory(params: Partial<Category>) {
  return {

  } as Category;
}
