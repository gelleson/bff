import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseModel } from '@bff/api/database';
import { Roles } from './enums/roles';

@Entity({
  name: 'users'
})
export class User extends BaseModel<User> {
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

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.USER
  })
  role: Roles;

  @Column()
  @Exclude()
  password: string;

  @Column({
    nullable: true
  })
  lastLogin?: Date;
}
