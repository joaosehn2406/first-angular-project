import {Component, inject, Input} from '@angular/core';
import {RemoveTask} from '../modal/remove-task/remove-task';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

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
    Card,
    DatePipe
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
