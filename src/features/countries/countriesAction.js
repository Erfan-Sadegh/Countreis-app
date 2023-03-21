import axios from '../../config/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk(
  'countries/showAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      return data;
    } catch (err) {
      const message = (err.reponse && err.reponse.data) || err.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default fetchCountries;


// search by cioc code
export const searchByCode = createAsyncThunk(
  'countries/searchByCode',
  async (code, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
      return data;
    } catch (err) {
      const message = (err.reponse && err.reponse.data) || err.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// search by region
export const searchByRegion = createAsyncThunk(
  'countries/searchByRegion',
  async (region, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
      return data;
    } catch (err) {
      const message = (err.reponse && err.reponse.data) || err.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);