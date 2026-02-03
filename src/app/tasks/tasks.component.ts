import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {AddTaskComponent} from './modal/add-task/add.task.component';
import {AddTaskModelComponent} from './modal/add-task/add.task.model.component';
import {TaskItem} from './task/task.model.component';

type UserTasks = TaskItem[];

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
  @Input({required: true}) userTasks?: UserTasks;
  @Input({required: true}) userId?: string

  @Output() completeTask = new EventEmitter<string>();
  @Output() removeTask = new EventEmitter<string>();
  @Output() createTask = new EventEmitter<TaskItem>();

  canShowModal: boolean = false;

  onCompleteTask(id: string) {
    this.completeTask.emit(id);
  }

  onRemoveTask(id: string) {
    this.removeTask.emit(id)
  }

  onClickManageModal() {
    this.canShowModal = !this.canShowModal
  }

  onAddTask(taskData: AddTaskModelComponent) {
    const newTask: TaskItem = {
      id: new Date().getTime().toString(),
      userId: this.userId!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    }

    this.createTask.emit(newTask)
    this.onClickManageModal()
  }
}
