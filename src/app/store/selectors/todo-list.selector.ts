import { createSelector } from '@ngrx/store';
import TodoListState from '../states/todo-list.state';
import { Todo } from 'src/app/types/todo.type';

export const selectTodoListState$ = (state: {store: TodoListState}) => state.store.todos;

export const getTodoById$ = (id) => createSelector(selectTodoListState$, (todoList: Todo[]) => {
    if (todoList) {
        return todoList.find(todo => {
            return todo.id === id;
        });
    } else {
        return {};
    }
});
