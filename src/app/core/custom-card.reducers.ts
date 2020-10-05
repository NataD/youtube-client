import { createReducer, on } from '@ngrx/store';
import { add, reset } from './custom-card.actions';

export const initialState = 0;

const _customCardReducer = createReducer(
  initialState,
  on(add, (state) => state + 1),
  // on(add, (state, {customCard}) => ({
  //   ...state,
  //   cardInput: '',
  //   customCards: [...state.customCards, customCard]
  // })),
  on(reset, (state) => null)
);

export function customCardReducer(state, action) {
  return _customCardReducer(state, action);
}
