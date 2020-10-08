import { ISearchState, initialSearchState } from './search.state';
import { ICustomCardState, initialCustomCardState } from './custom-card.state';

export interface IAppState {
  searchData: ISearchState;
  customCards: ICustomCardState;
}

export const initialAppState: IAppState = {
  searchData: initialSearchState,
  customCards: initialCustomCardState
}
