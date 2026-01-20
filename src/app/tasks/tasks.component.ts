import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {ModalComponent} from './modal/modal.component';

type UserTasks = TaskItem[];

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    ModalComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userName?: string;
  @Input({required: true}) userTasks?: UserTasks;
  @Output() completeTask = new EventEmitter<string>();

  canShowModal: boolean = false;

  onCompleteTask(id: string) {
    this.completeTask.emit(id);
  }

  onClickManageModal() {
    this.canShowModal = !this.canShowModal
  }
}
