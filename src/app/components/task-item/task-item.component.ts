import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();
  faXmark = faXmark;
  // ! indicates that you’re certain that value is not null or undefined.
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) :void{
    this.onDeleteTask.emit(task);
  }
  onToggle(task : Task):void{
    this.onToggleReminder.emit(task);
  }

}
