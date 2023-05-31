import { createSlice } from '@reduxjs/toolkit';

const SliceContacts = createSlice({
  name: 'Contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return state.concat(action.payload);
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
const SliceFilter = createSlice({
  name: 'Filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, removeContact } = SliceContacts.actions;
export const { filterContacts } = SliceFilter.actions;

export { SliceContacts, SliceFilter };
