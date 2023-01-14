import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { name: 'user_id', description: 'id of the user' })
  userId: string;
  @Column()
  @Field(() => String, {
    name: 'first_name',
    description: 'first name of the user',
  })
  firstName: string;
  @Column()
  @Field(() => String, {
    name: 'last_name',
    description: 'last name of the user',
  })
  lastName: string;
  @Column()
  @Field(() => String, { name: 'email', description: 'email of the user' })
  email: string;
  @Column({ nullable: true })
  @Field(() => String, { name: 'role', description: 'role of the user' })
  role: string;
}
