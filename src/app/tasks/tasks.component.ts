import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskComponent} from './task/task.component';

type UserTasks = TaskItem[];

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userName?: string;
  @Input({required: true}) userTasks?: UserTasks;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(id: string) {
    this.complete.emit(id);
  }
}
