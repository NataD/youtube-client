import { createReducer, on } from '@ngrx/store';
import { add, reset } from '../actions/custom-card.actions';
import { initialCustomCardState } from '../state/custom-card.state';

export const initialState = initialCustomCardState;

const _customCardReducer = createReducer(
  initialState,
  on(add, (state, {title, description, img, video, createdAt}) => ({
    ...state,
    customCards: [...state.customCards, {
      title: title,
      description: description,
      img: img,
      video: video,
      createdAt: createdAt
    }]
  })),
  on(reset, (state) => null)
);

export function customCardReducer(state, action) {
  return _customCardReducer(state, action);
}
