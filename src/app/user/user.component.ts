import {Component, EventEmitter, Input, Output} from '@angular/core';

interface User {
  id: string,
  name: string,
  avatar: string
}

@Component({ //@component is a decorator
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: User
  @Output() userSelected = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }

  onSelectUser() {
    this.userSelected.emit(this.user.id);
  }
}
