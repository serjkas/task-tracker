import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { ETaskStatus } from '../types';
// import { IsEnum } from 'class-validator';

registerEnumType(ETaskStatus, {
  name: 'ETaskStatus',
});

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: 'name of the task' })
  name: string;
  // @IsNotEmpty()
  // @IsEnum(ETaskStatus)
  @Field(() => ETaskStatus, { description: 'name of the task' })
  status: ETaskStatus;
  @Field(() => String, { description: 'descrription of the task ' })
  desription: string;
}
