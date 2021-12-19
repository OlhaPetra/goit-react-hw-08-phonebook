import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://61b64720c95dd70017d40ee7.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get(`/contacts`);
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const contact = { name, phone };
    const { data } = await axios.post(`/contacts`, contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data.id;
  },
);
