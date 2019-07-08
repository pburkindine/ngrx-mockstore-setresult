import { createAction, props } from '@ngrx/store';

export const updateSampleValue = createAction('[Sample] UpdateValue', props<{value: number}>());
