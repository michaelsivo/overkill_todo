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
import { TodoListService } from './services/todo-list.service';
import { TodoListSortPipe } from './pipes/todo-list-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListSortPipe
  ],
  imports: [
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(DbService, { delay: 200 }),
    StoreModule.forRoot({ store: TodoListReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TodoListEffects])
  ],
  providers: [
    TodoListService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
