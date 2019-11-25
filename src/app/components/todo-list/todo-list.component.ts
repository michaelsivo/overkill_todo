import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import TodoListState from 'src/app/store/states/todo-list.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/types/todo.type';
import * as fromTodoList from '../../store/actions/todo-list.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]>;
  error$: Observable<Partial<HttpErrorResponse>>;

  constructor(
    private store: Store<{store: TodoListState}>,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.todoList$ = store.pipe(select('store', 'todos'));
    this.error$ = store.pipe(select('store', 'error'));
  }

  ngOnInit() {
    this.store.dispatch(fromTodoList.loadTodoLists());
  }

  toggleOption(event, todo) {
    todo.state = event.checked;
    this.store.dispatch(
      fromTodoList.changeTodoState(
        { payload: { todo } }
      )
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newTodo = new Todo(result.title, result.desc);
        this.store.dispatch(fromTodoList.addTodo({payload: { todo: newTodo}}));
      }
    });
  }

  goToDetail(todo: Todo) {
    this.router.navigateByUrl('todo-detail/' + todo.id);
  }
}
