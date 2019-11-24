import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { TodoListReducer } from 'src/app/store/reducers/todo-list.reducer';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoListSortPipe } from 'src/app/pipes/todo-list-sort.pipe';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatCardModule,
        MatCheckboxModule,
        StoreModule.forRoot({ store: TodoListReducer }),
      ],
      declarations: [ TodoListComponent, TodoListSortPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
