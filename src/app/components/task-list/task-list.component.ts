import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Task[];
  constructor(private router:Router, private taskService:TaskService) { }

  ngOnInit() {
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((_data)=>{   
      this.tasks = _data;   
      console.log(_data);
    });
  }
  addNewTask(){
    this.router.navigate(['/newtask']);
  }
  checkTask(_id:string){
    this.taskService.toggleStateTask(_id).subscribe((_data)=>{
      console.log('Put');
      this.router.navigate(['/']);
    });
    // this.taskService.toggleStateTask(_id);
  }
}
