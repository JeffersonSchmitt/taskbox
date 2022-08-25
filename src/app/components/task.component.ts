import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  template: `
    <div class="list-item {{ task.state }}">
      <label
        [attr.aria-label]="'archiveTask-' + task.id"
        for="checked-{{ task.id }}"
        class="checkbox"
      >
        <input
          type="checkbox"
          disabled="true"
          [defaultChecked]="task.state === 'TASK_ARCHIVED'"
          name="checked-{{ task.id }}"
          id="checked-{{ task.id }}"
        />
        <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
      </label>
      <label
        [attr.aria-label]="task.title + ''"
        for="title-{{ task.id }}"
        class="title"
      >
        <input
          type="text"
          [value]="task.title"
          readonly="true"
          id="title-{{ task.id }}"
          name="title-{{ task.id }}"
          placeholder="Input title"
          style="text-overflow: ellipsis;"
        />
      </label>
      <button
        *ngIf="task?.state !== 'TASK_ARCHIVED'"
        class="pin-button"
        [attr.aria-label]="'pinTask-' + task.id"
        (click)="onPin(task.id)"
      >
        <span class="icon-star"></span>
      </button>
    </div>
  `,
})
export class TaskComponent {
  @Input() task: Task;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
