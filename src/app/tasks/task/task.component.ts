import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RemoveTask} from '../modal/remove-task/remove-task';
import {Card} from '../../shared/card/card';

interface UserTasks {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

@Component({
  selector: 'app-task',
  imports: [
    RemoveTask,
    Card
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) userTasks!: UserTasks;
  @Output() complete = new EventEmitter<string>();
  @Output() removeTask = new EventEmitter<string>();

  canShowRemoveDialog: boolean = false

  onCompleteTask() {
    this.complete.emit(this.userTasks.id);
  }

  onRemoveTask() {
    this.removeTask.emit(this.userTasks.id)
  }

  onClickManageModel() {
    this.canShowRemoveDialog = !this.canShowRemoveDialog
  }
}
