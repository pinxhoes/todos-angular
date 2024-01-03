import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://localhost:8080/api/todos';
  constructor(private http: HttpClient) { }

  getAllTodos() {
    return this.http.get<Todo[]>(`${this.baseUrl}`)
  }

  addTask(postData: Todo){
    return this.http.post(`${this.baseUrl}`, postData);
  }
  updateTodo(postData: Todo){
    return this.http.patch(`${this.baseUrl}/${postData.uuid}`, postData);
  }
  deleteTask(taskItem: Todo){
    return this.http.delete(`${this.baseUrl}/${taskItem.uuid}`);
  }

}
