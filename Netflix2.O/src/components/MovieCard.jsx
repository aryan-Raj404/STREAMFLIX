import React from 'react'
import { IMAGE_BASE_URL } from './../utils/constant.js';
import { setOpen , setId , setName } from '../redux/movieSlice.js';
import { useDispatch } from 'react-redux';


const MovieCard = ({movieId , pic , title}) => {
  const dispatch = useDispatch();
  if(!pic) return null;
  const handleOpen = ()=>{
    dispatch(setOpen(true));
    dispatch(setId(movieId));
    dispatch(setName(title));
  }
  return (
    <div className='w-42 hover:scale-120 transition-transform duration-300'>
        <img onClick={handleOpen} src={`${IMAGE_BASE_URL}${pic}`} alt="movie-banner" className='rounded-sm'/>
    </div>
  )
}

export default MovieCard