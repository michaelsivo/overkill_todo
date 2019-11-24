import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import TodoListState from 'src/app/store/states/todo-list.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/types/todo.type';
import * as fromTodoList from '../../store/actions/todo-list.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]>;
  error$: Observable<Partial<HttpErrorResponse>>;

  constructor(private store: Store<{store: TodoListState}>) {
    this.todoList$ = store.pipe(select('store', 'todos'));
    this.error$ = store.pipe(select('store', 'error'));
  }

  ngOnInit() {
    this.store.dispatch(fromTodoList.loadTodoLists());
  }

}
