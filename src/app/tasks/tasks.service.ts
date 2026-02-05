import {Injectable} from '@angular/core';
import {TaskItem} from './task/task.model.component';
import {DUMMY_USER_TASKS} from '../data/dummy-tasks';

@Injectable({providedIn: 'root'})
export class TasksService {
  private userTasks: TaskItem[] = [...DUMMY_USER_TASKS]

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.userTasks = JSON.parse(tasks);
    }
  }

  getByUser(userId: string) {
    return this.userTasks.filter(task => task.userId === userId);
  }

  add(task: TaskItem) {
    this.userTasks.unshift({
      id: new Date().getTime().toString(),
      userId: task.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });

    this.saveTasks()
  }

  remove(id: string) {
    this.userTasks = this.userTasks.filter(task => task.id !== id);
    this.saveTasks()
  }


  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.userTasks))
  }
}
