import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from './pure-task-list.component';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}
