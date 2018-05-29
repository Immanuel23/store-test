import { Todo } from '../../models/todo.model';
import * as fromTodos from '../actions/todos.action';

export interface TodoState {
    entities: { [id: number]: Todo };
}

export const initialState: TodoState = {
    entities: {}
};

export function reducer(state = initialState, action): TodoState {
    switch (action.type) {
        case fromTodos.CREATE_TODO: {
            const todo = action.payload;
            const entities = {
                ...state.entities,
                [todo.id]: todo
            };
            return {
                ...state,
                entities
            };
        }
    }
}

