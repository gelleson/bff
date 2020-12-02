import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseModel } from '@bff/api/database';

@Entity({
  name: 'users'
})
export class UserModel extends BaseModel<UserModel> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    nullable: true
  })
  lastLogin?: Date;
}
