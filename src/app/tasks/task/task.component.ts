import {Component, EventEmitter, Input, Output} from '@angular/core';

interface UserTasks {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) userTasks!: UserTasks;
  @Output() complete = new EventEmitter<string>();
  @Output() removeTask = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.userTasks.id);
  }

  onRemoveTask() {
    this.removeTask.emit(this.userTasks.id)
  }
}
