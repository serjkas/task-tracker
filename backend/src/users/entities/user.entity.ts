import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Column({ name: 'first_name' })
  @Field(() => String, {
    description: 'first name of the user',
  })
  firstName: string;
  @Column({ name: 'last_name' })
  @Field(() => String, {
    description: 'last name of the user',
  })
  lastName: string;
  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Column({ nullable: true })
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
