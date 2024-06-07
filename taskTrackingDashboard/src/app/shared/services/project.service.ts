import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:5269/projects';

  constructor(private http: HttpClient) {}

  v(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateProject(project: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${project.id}`, project);
  }
}
