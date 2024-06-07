// task.model.ts
export interface Task {
    id: string;
    name: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    dueDate: Date;
  }
  