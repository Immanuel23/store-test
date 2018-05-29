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
      this.store.dispatch(new fromStore.CreateTodo({id: 1, done: false, value: "Commit a suicide"}))
      this.store.dispatch(new fromStore.CreateTodo({id: 2, done: false, value: "Go to heaven"}))

  }
}
