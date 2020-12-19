import { BaseModel } from '@bff/api/database';
import { Category } from '../interface/category';

export class CategoryObject extends BaseModel<CategoryObject> implements Category {
  description: string;
  id: number;
  isGlobal: boolean;
  name: string;
}
