import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// describe entire state of Redux store
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer // in this case TS make sure tat todosReducer return a value of Todo[] type
});
