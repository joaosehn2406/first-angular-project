import {Component, inject, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {AddTaskComponent} from './modal/add-task/add.task.component';
import {TaskItem} from './task/task.model.component';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    AddTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userName?: string;
  @Input({required: true}) userId?: string

  canShowModal: boolean = false;

  private tasksService = inject(TasksService)

  get userTasks(): TaskItem[] {
    if (!this.userId) return [];
    return this.tasksService.getByUser(this.userId);
  }

  onClickManageModal() {
    this.canShowModal = !this.canShowModal
  }
}
