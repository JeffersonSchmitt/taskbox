import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ArchiveTask, PinTask } from '../state/task.state';

@Component({
  selector: 'app-task-list',
  template: `
<app-pure-task-list
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `,
})
export class TaskListComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {
     this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: any) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: any) {
    this.store.dispatch(new PinTask(id));

 }
}
