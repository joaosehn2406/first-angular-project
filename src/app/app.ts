import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './data/dummy-users';
import {Tasks} from './tasks/tasks';
import {DUMMY_USER_TASKS} from './data/dummy-tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  userTasks = DUMMY_USER_TASKS;

  userId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userId)
  }

  get getAllUserTasks() {
    return this.userTasks.filter((task) => task.userId === this.userId)
  }

  onUserSelected(userId: string) {
    this.userId = userId
  }
}
