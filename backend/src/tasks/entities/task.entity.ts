import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ETaskStatus } from '../types';

registerEnumType(ETaskStatus, {
  name: 'ETaskStatus',
});

@ObjectType()
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid', { name: 'task_id' })
  @Field(() => String, { description: 'id of the task' })
  taskId: string;
  @Column()
  @Field(() => String, {
    description: 'first name of the user',
  })
  name: string;
  @Column({ nullable: true })
  @Field(() => String, {
    description: 'first name of the user',
    nullable: true,
  })
  description?: string;
  @Column()
  @Field(() => ETaskStatus, {
    description: 'first name of the user',
  })
  status: ETaskStatus;
  @ManyToMany(() => User, (user) => user.userId, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable()
  users: User[];
}
