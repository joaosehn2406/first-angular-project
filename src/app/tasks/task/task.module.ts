import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {ModalModule} from '../modal/modal.module';
import {SharedModule} from '../../shared/shared.module';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [ModalModule, SharedModule, DatePipe]
})
export class TaskModule {}
