import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

/*
 * GET, /contacts
 */
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get(`/contacts`);
    return data;
  },
);

/*
 * POST, /contacts
 */
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const contact = { name, number };
    const { data } = await axios.post(`/contacts`, contact);
    return data;
  },
);

/*
 * DELETE, /contacts
 */
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ contactId }) => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data.id;
  },
);
