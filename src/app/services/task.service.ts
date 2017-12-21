import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { TASKS } from '../resources/tasks.mock';

@Injectable()
export class TaskService {
  tasks:Task[];
  constructor() {
    this.tasks = TASKS;
  }
  getTasks(){
    return this.tasks;
  }

  addTask(_task:Task){
    this.tasks.push(_task);
  }
}
