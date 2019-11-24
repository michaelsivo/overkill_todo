import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import TodoListState from 'src/app/store/states/todo-list.state';
import * as selector from '../../store/selectors/todo-list.selector';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  selectedId: number;
  todo$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<{store: TodoListState}>) { }

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.store.select(selector.getTodoById$(this.selectedId));
      })
    );
  }

  goToList() {
    this.router.navigateByUrl('todo-list');
  }
}

