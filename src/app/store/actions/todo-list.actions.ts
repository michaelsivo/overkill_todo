import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/types/todo.type';
import { HttpErrorResponse } from '@angular/common/http';

export const loadTodoLists = createAction(
  '[TodoList] Load TodoLists'
);

export const loadTodoListsSuccess = createAction(
  '[TodoList] Load TodoLists Success',
  props<{ payload: Todo[] }>()
);

export const loadTodoListsFailure = createAction(
  '[TodoList] Load TodoLists Failure',
  props<{ error: Partial<HttpErrorResponse> }>()
);

export const changeTodoState = createAction(
  '[TodoList] Change Todo state',
  props<{ payload: {todo: Todo} }>()
);
