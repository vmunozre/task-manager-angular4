import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private router:Router, private taskService:TaskService) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['/']);
  }
  save(_name:string){
    // let nextId = this.taskService.getNextId();
    this.taskService.addTask(_name).subscribe((_datos)=>{
      console.log('Post');
      this.router.navigate(['/']);
    });
    
  }
}
