import { createAction, props } from '@ngrx/store';

export const retrieveData = createAction(
  '[Search] Retrieve',
  props<any>()
);
export const reset = createAction('[Search] Reset');
