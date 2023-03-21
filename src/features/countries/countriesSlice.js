import { createSlice } from '@reduxjs/toolkit';
import fetchCountries from './countriesAction';
import { searchByCode, searchByRegion } from './countriesAction';

const initialState = {
  loading: false,
  error: false,
  success: false,
  countriesData: [],
  countryData: [],
  regions: '',
  message: '',
  searchTerm: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = '';
      state.regions = '';
    },
    setRegion: (state, action) => {
      state.regions = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.loading = false;
      state.countriesData = action.payload;
      state.success = true;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
    // Country Data by cioc Code
    [searchByCode.pending]: (state) => {
      state.loading = true;
    },
    [searchByCode.fulfilled]: (state, action) => {
      state.loading = false;
      state.countryData = action.payload;
      state.success = true;
    },
    [searchByCode.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
    // Country Data by Region
    [searchByRegion.pending]: (state) => {
      state.loading = true;
    },
    [searchByRegion.fulfilled]: (state, action) => {
      state.loading = false;
      state.countriesData = action.payload;
      state.success = true;
    },
    [searchByRegion.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

export const { reset, setRegion, setSearchTerm } = countriesSlice.actions;

export default countriesSlice.reducer;
