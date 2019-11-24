import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../types/todo.type';

export class DbService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      { id: 1, title: 'Work', desc: 'Creating new features', state: false },
      { id: 2, title: 'Meeting', desc: 'Daily', state: false },
      { id: 3, title: 'Sports', desc: 'Biking in the forest', state: false },
      { id: 4, title: 'Afterwork', desc: 'With Antoine and JB', state: true }
    ];
    return {todos};
  }
}
