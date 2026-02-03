import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-remove-task',
  imports: [
    FormsModule
  ],
  templateUrl: './remove-task.html',
  styleUrl: './remove-task.css',
})
export class RemoveTask {
  @Output() onDismissModal = new EventEmitter<void>();
  @Output() onConfirmModal = new EventEmitter<void>();

  onClickDismissModal() {
    this.onDismissModal.emit()
  }

  onClickConfirmModal() {
    this.onConfirmModal.emit()
  }
}
