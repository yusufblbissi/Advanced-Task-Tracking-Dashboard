import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'tasks', component: TaskManagementComponent },
  { path: 'timeline', component: TimelineViewComponent },
];
