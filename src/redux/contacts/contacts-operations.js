import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const fetchContactById = createAsyncThunk(
//   'contacts/fetchContactById',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`/contacts/${Number(id)}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, ...contact }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${Number(id)}`, {
        ...contact,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);