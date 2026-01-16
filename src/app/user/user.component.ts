import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({ //@component is a decorator
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) userId?: string;
  @Input({required: true}) userAvatar?: string;
  @Input({required: true}) userName?: string;
  @Output() userSelected = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.userAvatar}`
  }

  onSelectUser() {
    this.userSelected.emit(this.userId);
  }
}
