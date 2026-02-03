import {Component, EventEmitter, Output} from '@angular/core';
import {AddTaskModelComponent} from './add.task.model.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './add.task.component.html',
  styleUrl: './add.task.component.css',
})
export class AddTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<AddTaskModelComponent>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onClickCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
