import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddTasksModelComponent} from './add.tasks.model.component';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../../tasks.service';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './add.tasks.component.html',
  styleUrl: './add.tasks.component.css',
})
export class AddTasksComponent {
  @Input({required: true}) userId!: string
  @Output() closeModal = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<AddTasksModelComponent>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  constructor(private taskService: TasksService) {
  }

  onClickCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.taskService.add({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      userId: this.userId,
      id: 't' + Date.now().toString()
    })

    this.onClickCloseModal()
  }
}
