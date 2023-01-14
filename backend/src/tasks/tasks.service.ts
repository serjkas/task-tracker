import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ETaskStatus } from './types';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskInput: CreateTaskInput) {
    const task = this.taskRepository.create(createTaskInput);
    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(taskId: string): Promise<Task> {
    const task = await this.taskRepository.findOne(taskId);
    if (!task) {
      throw new NotFoundException(`Task #${taskId} not found`);
    }
    return task;
  }

  async update(
    taskId: string,
    updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    const task = await this.taskRepository.preload({
      taskId: taskId,
      ...updateTaskInput,
    });
    if (!task) {
      throw new NotFoundException(`task #${taskId} not found`);
    }
    return this.taskRepository.save(task);
  }

  async remove(taskId: string): Promise<Task> {
    const task = await this.taskRepository.findOne(taskId);
    await this.taskRepository.remove(task);
    return {
      taskId: taskId,
      name: '',
      status: ETaskStatus.Hold,
      users: [],
    };
  }
}
