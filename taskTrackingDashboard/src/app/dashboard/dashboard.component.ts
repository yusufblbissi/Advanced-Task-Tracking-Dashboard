import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../shared/services/dashboard.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  dueDate: string;
  completed: boolean;
}

interface Project {
  id: number;
  name: string;
  owner: string;
  startDate: string;
  deadline: string;
  completionPercentage: number;
  overdueTasks: number;
  tasks: Task[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [RouterModule,CommonModule],
  styleUrls: ['./dashboard.component.scss'],
  

})
export class DashboardComponent {
  projects: any[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  viewProjectDetails(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }
}
