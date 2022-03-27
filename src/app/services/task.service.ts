import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
}
@Injectable({
  providedIn: 'root'
})


export class TaskService {
  private apiUrl = "http://0.0.0.0:5000/tasks";

  constructor(private HttpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.HttpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.HttpClient.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.HttpClient.put<Task>(url, task, httpOptions);
  }
}
