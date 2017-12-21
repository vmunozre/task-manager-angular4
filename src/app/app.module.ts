import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './routes/app.routing';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
