import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private baseUrl : String = "http://localhost:8080/tasks";

  constructor(private httpClient: HttpClient) { }

  createTask(task: Task): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, task);
  }

  getTaskById(id: number){
    return this.httpClient.get<Task>(`${this.baseUrl}/${id}`);
  }

  updateTask(id:number, task:Task): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, task);
  }

  getTasks(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }
}
