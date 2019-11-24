import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromTodoList from '../actions/todo-list.actions';
import { Todo } from 'src/app/types/todo.type';
import { TodoListService } from 'src/app/services/todo-list.service';

@Injectable()
export class TodoListEffects {
  constructor(private actions$: Actions, private todoListService: TodoListService) {}

  GetTodoList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTodoList.loadTodoLists),
      mergeMap(action =>
        this.todoListService.getTodos()
          .pipe(
            map(data => fromTodoList.loadTodoListsSuccess({ payload: data })),
            catchError((error: HttpErrorResponse) => {
              return of(fromTodoList.loadTodoListsFailure({error}));
            })
          )
        )
      )
  );
}
