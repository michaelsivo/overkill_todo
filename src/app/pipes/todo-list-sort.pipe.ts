import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../types/todo.type';

@Pipe({
  name: 'sort'
})
export class TodoListSortPipe implements PipeTransform {
  transform(array: Todo[], field: string): Todo[] {
    array.sort((a: Todo, b: Todo) => {
        if (a[field] < b[field]) {
            return -1;
        } else if (a[field] > b[field]) {
            return 1;
        } else {
            return 0;
        }
    });
    return array;
  }
}
