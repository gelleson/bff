import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from '../services';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../../user/user.entity';
import { CategoryCreateInput } from '../dto/category-create.input';

@Auth()
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {
  }

  @Get()
  public findAll(@CurrentUser() user: User) {
    return this.categoryService.findByUser(user.id);
  }

  @Post()
  public create(@CurrentUser() user: User, @Body() input: CategoryCreateInput) {
    return this.categoryService.create(user.id, input);
  }
}
