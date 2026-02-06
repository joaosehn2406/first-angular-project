import { Component } from '@angular/core';
import { DUMMY_USERS } from './data/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  userId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.userId);
  }

  onUserSelected(userId: string) {
    this.userId = userId;
  }
}
