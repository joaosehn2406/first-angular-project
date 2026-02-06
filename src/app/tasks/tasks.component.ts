import {Component, inject, Input} from '@angular/core';
import {UserTasks} from './task/task.model.component';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userName?: string;
  @Input({required: true}) userId?: string

  canShowModal: boolean = false;

  private tasksService = inject(TasksService)

  get userTasks(): UserTasks[] {
    if (!this.userId) return [];
    return this.tasksService.getByUser(this.userId);
  }

  onClickManageModal() {
    this.canShowModal = !this.canShowModal
  }
}
