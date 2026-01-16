import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({ //@component is a decorator
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  }
  @Output() userSelected = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.id}`
  }

  onSelectUser() {
    this.userSelected.emit(this.user.id);
  }
}
