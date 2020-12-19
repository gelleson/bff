import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from '@bff/api/database';
import { User } from '../../user/user.entity';
import { Exclude } from 'class-transformer';

@Entity({
  name: 'categories'
})
export class Category extends BaseModel<Category> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @Column({
    default: true
  })
  isGlobal: boolean;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @Exclude()
  createdBy?: User;
}
