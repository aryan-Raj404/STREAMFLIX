import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    name: null,
    searchedMovie: null,
  },
  reducers: {
    setBoth : (state,action)=>{
        const { name , searchedMovie } = action.payload;
        state.name = name;
        state.searchedMovie = searchedMovie;
    },
  }});

export const {setBoth} = searchSlice.actions;
export default searchSlice.reducer;