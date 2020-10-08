import { createReducer, on } from '@ngrx/store';
import { retrieveData, reset } from '../actions/search.actions';
import { initialSearchState } from '../state/search.state';

export const initialState = initialSearchState;

const _searchReducer = createReducer(
  initialState,
  on(retrieveData, (state, data) => ({
    ...state,
    searchData: [...state.searchData, data.items]
  })),
  on(reset, (state) => null)
);

export function searchReducer(state, action) {
  return _searchReducer(state, action);
}
