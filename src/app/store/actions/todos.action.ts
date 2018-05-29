import { Action } from '@ngrx/store';

import { Todo } from '../../models/todo.model';

export const CREATE_TODO = '[Todos] Create Todo';

export class CreateTodo implements Action {
    readonly type = CREATE_TODO;
    constructor(public payload: Todo) {}
}

export type TodosAction = CreateTodo;
