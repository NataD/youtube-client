import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICustomCardState } from '../state/custom-card.state';

const selectCustomCardState = (state: IAppState) => state.customCards;

export const selectCustomCard = createSelector(
  selectCustomCardState,
  (state: ICustomCardState) => state.customCards
)
