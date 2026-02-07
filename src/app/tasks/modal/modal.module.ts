import {NgModule} from '@angular/core';
import {AddTasksComponent} from './add-tasks/add.tasks.component';
import {RemoveTasksComponent} from './remove-tasks/remove.tasks.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddTasksComponent, RemoveTasksComponent],
  imports: [
    FormsModule
  ],
  exports: [AddTasksComponent, RemoveTasksComponent]
})
export class ModalModule{}
