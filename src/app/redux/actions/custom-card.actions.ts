import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Custom Card Component] Add',
  props<{
    title: string;
    description: string;
    img: string;
    video: string;
    createdAt: Date
  }>()
);
export const reset = createAction('[Custom Card Component] Reset');
