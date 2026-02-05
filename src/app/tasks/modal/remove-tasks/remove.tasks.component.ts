import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-remove-tasks',
  imports: [
    FormsModule
  ],
  templateUrl: './remove.tasks.component.html',
  styleUrl: './remove.tasks.component.css',
})
export class RemoveTasksComponent {
  @Output() onDismissModal = new EventEmitter<void>();
  @Output() onConfirmModal = new EventEmitter<void>();

  onClickDismissModal() {
    this.onDismissModal.emit()
  }

  onClickConfirmModal() {
    this.onConfirmModal.emit()
  }
}
