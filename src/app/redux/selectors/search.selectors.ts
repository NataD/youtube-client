import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ISearchState } from '../state/search.state';

const selectSearchState = (state: IAppState) => state.searchData;

export const selectSearchData = createSelector(
  selectSearchState,
  (state: ISearchState) => state.searchData
)
