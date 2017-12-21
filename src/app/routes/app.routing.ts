import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { NewTaskComponent } from '../components/new-task/new-task.component';

const APP_ROUTES: Routes = [
    {path:'', component:TaskListComponent},
    {path:'newtask', component:NewTaskComponent},
    {path:'**', redirectTo:''}
];

export const routing = RouterModule.forRoot(APP_ROUTES);