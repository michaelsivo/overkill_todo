import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-list'
  },
  {
      path: 'todo-list',
      component: TodoListComponent
  },
  {
    path: 'todo-detail/:id',
    component: TodoDetailComponent
  },
  {
      path: '**',
      redirectTo: 'todo-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
