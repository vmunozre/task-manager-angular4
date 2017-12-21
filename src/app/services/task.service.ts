import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { TASKS } from '../resources/tasks.mock';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class TaskService {
  tasks:Task[];
  url:string = 'https://jquery-lista-compra.firebaseio.com/tareas11';
  constructor(private http:Http) {
    this.tasks = TASKS;
  }
  getTasks(){
    return this.http.get(this.url + '.json').map((_data)=>{  
      let json = _data.json();
      let resultado: Task[] = [];
      for(let i in json){
        resultado.push(new Task(i,json[i].name,json[i].state));
      }  
      this.tasks = resultado;
      return resultado;
    });
  }
  addTask(_name:string){
    return this.http.post(this.url + '.json',{name:_name, state: false}).map((_data)=>{
      return _data.json();
    });
  }
  toggleStateTask(_id){
    let arrayAux = this.tasks.filter((obj)=>{
      return obj.id === _id;
    });
    let task = arrayAux[0];
    if(task != undefined){
      task.state = !task.state;
    }
    return this.http.put(`${this.url}/${task.id}.json`,{name:task.name, state:task.state}).map((_data)=>{
      return _data.json();
    });
  }
  //11
  // getTasks(){
  //   return this.tasks;
  // }

  // getTask(_id:number){
  //   let arrayAux = this.tasks.filter((obj)=>{
  //     return obj.id === _id;
  //   });
  //   return arrayAux[0];
  // }
  // toggleStateTask(_id:number){
  //   let arrayAux = this.tasks.filter((obj)=>{
  //     return obj.id === _id;
  //   });
  //   let task = arrayAux[0];
  //   if(task != undefined){
  //     task.state = !task.state;
  //   }
  // }
  // addTask(_task:Task){
  //   this.tasks.push(_task);
  // }
  
  // getNextId(){
  //   let max:number = 0;
  //   for(let i = 0, iLen = this.tasks.length; i<iLen; i++){
  //     max = Math.max(max, this.tasks[i].id);
  //   }
  //   max++;
  //   return max;
  // }
}
