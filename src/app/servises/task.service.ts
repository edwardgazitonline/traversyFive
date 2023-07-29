import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(){ }

  getTask(): Task[]{
    return TASKS;
  }
}
