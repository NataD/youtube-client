import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { customCardReducer } from './custom-card.reducers';
import { searchReducer } from './search.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  searchData: searchReducer,
  customCards: customCardReducer
}
