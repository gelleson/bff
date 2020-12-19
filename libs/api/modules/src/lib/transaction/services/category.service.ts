import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryCreateInput } from '../dto/category-create.input';
import { CategoryObject } from '../dto/category.object';
import { UserService } from '../../user';
import { Roles } from '../../user/enums/roles';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>,
              private userService: UserService) {
  }

  public async create(userId: number, input: CategoryCreateInput) {
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new Error('user required');
    }

    if (user.role === Roles.USER) {
      input.isGlobal = false;
    }

    return new CategoryObject(
      await this.categoryRepository.save({
        name: input.name,
        isGlobal: input.isGlobal,
        createdBy: user,
      })
    );
  }

  public async findByUser(userId: number) {

    const categories = await this.categoryRepository.find({
      where: [
        {
          isGlobal: true,
        },
        {
          createdBy: {
            id: userId
          }
        }
      ]
    });

    return categories.map(category => new CategoryObject(category))
  }

  public async findOrFail(categoryId: number) {
    const category = await this.categoryRepository.findOne(categoryId);

    if (!category) {
      throw new Error('category not found');
    }

    return category;
  }
}
