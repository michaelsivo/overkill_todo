import { TodoListReducer, initialState } from './todo-list.reducer';
import * as fromTodoList from '../actions/todo-list.actions';
import { HttpErrorResponse } from '@angular/common/http';

describe('TodoList Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = TodoListReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('loadTodoLists action', () => {
    it('should return the previous state', () => {
      const result = TodoListReducer(initialState, fromTodoList.loadTodoLists);

      expect(result).toEqual(initialState);
    });
  });

  describe('loadTodoLists action success', () => {
    it('should have the todo', () => {
      const todos = [
        { id: 1, title: 'Work', desc: 'Creating new features', state: false }
      ];
      const result = TodoListReducer(initialState, fromTodoList.loadTodoListsSuccess({payload: todos}));

      expect(result.todos).toEqual(todos);
    });
  });

  describe('loadTodoLists action failure', () => {
    it('should return the error', () => {
      const error = new HttpErrorResponse({});
      const result = TodoListReducer(initialState, fromTodoList.loadTodoListsFailure({error}));

      expect(result.error).toEqual(error);
    });
  });
});

