import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTodos from './todos.reducers';

export interface State {
    todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<State> = {
    todos: fromTodos.reducer
};


