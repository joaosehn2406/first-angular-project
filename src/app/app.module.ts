import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksComponent} from './tasks/tasks.component';
import {BrowserModule} from '@angular/platform-browser';
import {CardComponent} from './shared/card/card.component';
import {TaskComponent} from './tasks/task/task.component';
import {RemoveTasksComponent} from './tasks/modal/remove-tasks/remove.tasks.component';
import {AddTasksComponent} from './tasks/modal/add-tasks/add.tasks.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    CardComponent,
    RemoveTasksComponent,
    AddTasksComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule]
})

export class AppModule {}
