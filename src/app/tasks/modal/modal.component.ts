import {Component, EventEmitter, Output} from '@angular/core';
import {ModalModelComponent} from './modal.model.component';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<ModalModelComponent>();
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
