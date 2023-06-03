import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/operations/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const SliceContacts = createSlice({
  name: 'Contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

const SliceFilter = createSlice({
  name: 'Filter',
  initialState: '',
  reducers: {
    filterContacts: (_, action) => action.payload,
  },
});

export const contactsReducer = SliceContacts.reducer;
export const { filterContacts } = SliceFilter.actions;

export { SliceContacts, SliceFilter };

//------------------------------------------------------//

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
// } from 'redux/operations/operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const SliceContacts = createSlice({
//   name: 'Contact',
//   initialState: {
//     items: [],
//     isLonding: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLonding = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLonding = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLonding = false;
//       state.error = null;
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload.id
//       );
//     },
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,
//   },
// });
// const SliceFilter = createSlice({
//   name: 'Filter',
//   initialState: '',
//   reducers: {
//     filterContacts(_, action) {
//       return action.payload;
//     },
//   },
// });

// export const contactsReducer = SliceContacts.actions;
// export const { filterContacts } = SliceFilter.actions;

// export { SliceContacts, SliceFilter };
