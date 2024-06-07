import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/services/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  owner: string;
  startDate: string;
  deadline: string;
  tasks:[];
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project = { owner: '', startDate: '', deadline: '' ,tasks:[]};

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectDetails(id).subscribe((project) => {
      this.project = project;
    });
  }

  updateProject() {
    this.projectService.updateProject(this.project).subscribe((response) => {
      console.log('Project updated successfully');
    });
  }
  
}
