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
    this.tasks = this.taskService.getTasks();
  }
  addNewTask(){
    this.router.navigate(['/newtask']);
  }
}
