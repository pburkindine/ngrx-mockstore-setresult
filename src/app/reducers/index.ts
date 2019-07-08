import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSample from './sample.reducer';

export interface RootState {
  sample: fromSample.State;
}

export const reducers: ActionReducerMap<RootState> = {
  sample: fromSample.reducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? []
  : [];

export type SampleState = fromSample.State;
