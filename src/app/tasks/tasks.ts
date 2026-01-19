import {Component, Input} from '@angular/core';
import {Task} from './task/task';

interface TaskItem {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

type UserTasks = TaskItem[];

@Component({
  selector: 'app-tasks',
  imports: [
    Task
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userName?: string;
  @Input({required: true}) userTasks?: UserTasks;
}
