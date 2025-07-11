import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies : null,
    popularMovies : null,
    topRatedMovies : null,
    upcomingMovies : null,
    toggle : false,
    trailer : null,
    open : false,
    id : null,
    name : null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state, action) => {
      state.toggle = !state.toggle;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  }});

export const {setNowPlayingMovies , setPopularMovies , setTopRatedMovies , setUpcomingMovies , setToggle , setTrailer , setOpen , setId , setName} = movieSlice.actions;
export default movieSlice.reducer;