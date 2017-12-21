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
  getTask(_id:number){
    let arrayAux = this.tasks.filter((obj)=>{
      return obj.id === _id;
    });
    return arrayAux[0];
  }
  toggleStateTask(_id:number){
    let arrayAux = this.tasks.filter((obj)=>{
      return obj.id === _id;
    });
    let task = arrayAux[0];
    if(task != undefined){
      task.state = !task.state;
    }
  }
  addTask(_task:Task){
    this.tasks.push(_task);
  }
  
  getNextId(){
    let max:number = 0;
    for(let i = 0, iLen = this.tasks.length; i<iLen; i++){
      max = Math.max(max, this.tasks[i].id);
    }
    max++;
    return max;
  }
}
