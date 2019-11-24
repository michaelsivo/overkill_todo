import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoListEffects } from './todo-list.effects';
import * as fromTodoList from '../actions/todo-list.actions';
import { Todo } from 'src/app/types/todo.type';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const ArrayOfTodo: Todo[] = [
  { id: 1, title: 'Work', desc: 'Creating new features', state: false }
];

describe('TodoListEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoListEffects;
  let service: TodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TodoListEffects,
        TodoListService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TodoListEffects>(TodoListEffects);
    service = TestBed.get(TodoListService);

    spyOn(service, 'getTodos').and.returnValue(of(ArrayOfTodo));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get list of todos', () => {
    actions$ = new ReplaySubject(1);
    service.getTodos();
    (actions$ as ReplaySubject<Action>).next({ type: '[TodoList] Load TodoLists' });
    const completion = fromTodoList.loadTodoListsSuccess({payload: ArrayOfTodo});

    effects.GetTodoList$.subscribe(action => {
      expect(action).toEqual(completion);
    });
  });
});
