import { Component, Input, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from './../../servises/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
   // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
   ////const tasks = of(TASKS);
   //// this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
   this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
