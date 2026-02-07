import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {TaskModule} from './task/task.module';
import {ModalModule} from './modal/modal.module';

@NgModule({
  declarations: [TasksComponent],
  exports: [TasksComponent],
  imports: [ModalModule, TaskModule]
})
export class TasksModule {}
