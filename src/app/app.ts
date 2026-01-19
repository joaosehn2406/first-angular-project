import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  userId?: string;

  get getSelectedUser() {
    return this.users.find((user) => user.id === this.userId)
  }

  onUserSelected(userId: string) {
    this.userId = userId
  }
}
