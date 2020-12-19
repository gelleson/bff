import { BaseModel } from '@bff/api/database';
import { Category } from '../interface/category';
import { Expose } from 'class-transformer';

export class CategoryObject extends BaseModel<CategoryObject> implements Category {
  @Expose()
  description?: string;
  @Expose()
  id: number;
  @Expose()
  isGlobal: boolean;
  @Expose()
  name: string;
}
