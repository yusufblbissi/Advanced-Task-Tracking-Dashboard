import { Component } from '@angular/core';
import { TaskService } from '../shared/services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Task {
  name: string;
  description: string;
  priority: string;
  dueDate: string;
}

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,

  styleUrls: ['./task-management.component.scss']

})
export class TaskManagementComponent {
  newTask: Task = { name: '', description: '', priority: '', dueDate: '' };

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask).subscribe((task) => {
      console.log('Task added successfully', task);
      // Reset the form
      this.newTask = { name: '', description: '', priority: '', dueDate: '' };
    });
  }
}
