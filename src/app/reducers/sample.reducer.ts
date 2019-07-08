import { Action, createReducer, on } from '@ngrx/store';
import { SampleActions } from '../actions';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0,
};

const reducerFn = createReducer<State>(
  initialState,
  on(SampleActions.updateSampleValue, (state, {value}) => ({ ...state, value })),
);


export function reducer(state: State | undefined, action: Action) {
  return reducerFn(state, action);
}