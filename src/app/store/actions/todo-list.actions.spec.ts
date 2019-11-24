import * as fromTodoList from './todo-list.actions';
import { Todo } from '../../types/todo.type';
import { HttpErrorResponse } from '@angular/common/http';

describe('loadTodoLists', () => {
  it('should return load todo list', () => {
    expect(fromTodoList.loadTodoLists().type).toBe('[TodoList] Load TodoLists');
  });
});

describe('loadTodoListsSuccess', () => {
  it('should return load success', () => {
    const payload: Todo[] = [
      { id: 1, title: 'Work', desc: 'Creating new features', state: false }
    ];
    expect(fromTodoList.loadTodoListsSuccess({payload}).type).toBe('[TodoList] Load TodoLists Success');
    expect(fromTodoList.loadTodoListsSuccess({payload}).payload).toEqual(payload);
  });
});

describe('loadTodoListsFailure', () => {
  it('should return load failure', () => {
    const error = new HttpErrorResponse({});
    expect(fromTodoList.loadTodoListsFailure({error}).type).toBe('[TodoList] Load TodoLists Failure');
    expect(fromTodoList.loadTodoListsFailure({error}).error).toEqual(error);
  });
});
