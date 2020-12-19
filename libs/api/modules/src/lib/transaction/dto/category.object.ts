import { BaseModel } from '@bff/api/database';
import { ICategory } from '../interface/ICategory';
import { Expose } from 'class-transformer';

export class CategoryObject extends BaseModel<CategoryObject> implements ICategory {
  @Expose()
  description?: string;
  @Expose()
  id: number;
  @Expose()
  isGlobal: boolean;
  @Expose()
  name: string;
}
