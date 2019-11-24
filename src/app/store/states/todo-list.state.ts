import { Todo } from 'src/app/types/todo.type';
import { HttpErrorResponse } from '@angular/common/http';

export default class TodoListState {
  todos: Array<Todo>;
  error: Partial<HttpErrorResponse>;
}

export const initializeState = () => {
  return { todos: [
    { id: 1, title: 'Work', desc: 'Creating new features', state: false }
  ], error: {} };
};
