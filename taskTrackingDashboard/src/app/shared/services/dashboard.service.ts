import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        name: 'Project A',
        owner: 'Owner A',
        startDate: '2023-01-01',
        deadline: '2023-06-30',
        completionPercentage: 75,
        overdueTasks: 2,
        tasks: [
          { id: 1, name: 'Task 1', description: 'Description 1', priority: 'High', dueDate: '2023-01-10', completed: false },
          { id: 2, name: 'Task 2', description: 'Description 2', priority: 'Medium', dueDate: '2023-02-20', completed: true },
        ]
      },
      {
        id: 2,
        name: 'Project B',
        owner: 'Owner B',
        startDate: '2023-02-01',
        deadline: '2023-07-30',
        completionPercentage: 50,
        overdueTasks: 1,
        tasks: [
          { id: 1, name: 'Task 1', description: 'Description 1', priority: 'Low', dueDate: '2023-03-10', completed: false },
          { id: 2, name: 'Task 2', description: 'Description 2', priority: 'High', dueDate: '2023-04-20', completed: false },
        ]
      }
    ];
    

    return of(projects);
  }
}
