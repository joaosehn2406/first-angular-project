import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {AddTaskComponent} from './modal/add-task/add.task.component';
import {AddTaskModelComponent} from './modal/add-task/add.task.model.component';
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

  constructor(private taskService: TasksService) {
  }

  get userTasks(): TaskItem[] {
    if (!this.userId) return [];
    return this.taskService.getByUser(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.remove(id)
  }

  onRemoveTask(id: string) {
    this.taskService.remove(id)
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

    this.taskService.add(newTask)
    this.onClickManageModal()
  }
}
