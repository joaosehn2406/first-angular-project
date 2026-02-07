import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {HeaderModule} from './header/header.module';
import {ModalModule} from './tasks/modal/modal.module';
import {TaskModule} from './tasks/task/task.module';
import {TasksModule} from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    FormsModule,
    SharedModule,
    UserModule,
    HeaderModule,
    ModalModule,
    TaskModule,
    TasksModule]
})

export class AppModule {}
