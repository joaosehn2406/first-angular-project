import {Component, inject, Input} from '@angular/core';
import {TasksService} from '../tasks.service';
import {UserTasks} from './task.model.component';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) userTasks!: UserTasks;

  private tasksService = inject(TasksService)

  canShowRemoveDialog: boolean = false

  onCompleteTask() {
    this.tasksService.remove(this.userTasks.id);
  }

  onRemoveTask() {
    this.tasksService.remove(this.userTasks.id)
  }

  onClickManageModel() {
    this.canShowRemoveDialog = !this.canShowRemoveDialog
  }
}
