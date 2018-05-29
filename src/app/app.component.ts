import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import { Store } from '@ngrx/store';

import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todo$: Observable<Todo[]>

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit(){

  }
  addTodo(todo){
    this.store.dispatch(new fromStore.CreateTodo({id: todo, done: false, value: todo}))
  }
}
