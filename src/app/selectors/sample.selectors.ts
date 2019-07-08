import { createSelector } from '@ngrx/store';

import { RootState } from '../reducers';

const getSampleState = (state: RootState) => state.sample;

export const selectSampleValue = createSelector(
  getSampleState,
  (state) => state.value
);
