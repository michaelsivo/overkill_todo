import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../types/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('api/todos');
  }
}
