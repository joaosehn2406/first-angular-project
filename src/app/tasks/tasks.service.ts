import {Injectable} from '@angular/core';
import {TaskItem} from './task/task.model.component';
import {DUMMY_USER_TASKS} from '../data/dummy-tasks';

@Injectable({providedIn: 'root'})
export class TasksService {
  private userTasks: TaskItem[] = [...DUMMY_USER_TASKS]

  getByUser(userId: string) {
    return this.userTasks.filter(task => task.userId === userId);
  }

  add(task: TaskItem) {
    this.userTasks.unshift(task);
  }

  remove(id: string) {
    this.userTasks = this.userTasks.filter(task => task.id !== id);
  }
}
