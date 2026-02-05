import {Component, inject, Input} from '@angular/core';
import {RemoveTasksComponent} from '../modal/remove-tasks/remove.tasks.component';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';
import {UserTasks} from './task.model.component';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe,
    RemoveTasksComponent
  ],
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
