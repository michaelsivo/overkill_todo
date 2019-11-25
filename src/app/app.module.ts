import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './services/db.service';
import { environment } from 'src/environments/environment';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoListReducer } from './store/reducers/todo-list.reducer';
import { TodoListEffects } from './store/effects/todo-list.effects';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoListService } from './services/todo-list.service';
import { TodoListSortPipe } from './pipes/todo-list-sort.pipe';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListSortPipe,
    TodoDetailComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(DbService, { delay: 200 }),
    StoreModule.forRoot({ store: TodoListReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TodoListEffects])
  ],
  providers: [
    TodoListService
  ],
  entryComponents: [
    AddTodoComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
