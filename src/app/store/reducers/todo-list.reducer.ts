import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from '../actions/todo-list.actions';
import {Todo} from '../../types/todo.type';
import TodoListState, { initializeState } from '../states/todo-list.state';

export const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(TodoListActions.loadTodoLists, state => state),
  on(TodoListActions.loadTodoListsSuccess, (state: TodoListState, { payload }) => {
    return { ...state, todos: payload };
  }),
  on(TodoListActions.loadTodoListsFailure, (state: TodoListState, { error }) => {
    console.log(error);
    return { ...state, error };
  })
);

export function TodoListReducer(state: TodoListState | undefined, action: Action) {
  return reducer(state, action);
}
