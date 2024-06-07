import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://your-api-url.com/tasks'; // تأكد من استخدام عنوان الـ API الصحيح

  constructor(private http: HttpClient) {}

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  // إضافة طرق أخرى لإدارة المهام مثل getTasks، updateTask، deleteTask
}
