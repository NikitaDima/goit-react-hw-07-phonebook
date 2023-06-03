import { configureStore } from '@reduxjs/toolkit';
import { SliceContacts, SliceFilter } from '../Slices/Slices';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: SliceContacts.reducer,
  filter: SliceFilter.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
