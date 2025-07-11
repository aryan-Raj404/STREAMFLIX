import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector((store)=> store.movies?.popularMovies);
  if(!movie) return null;
  const {overview , id , title} = movie[1];
  
  return (
    <>
    <VideoTitle title={title} overview = {overview}></VideoTitle>
    <VideoBackground movieId={id}></VideoBackground>
    </>
  )
}

export default MainContainer;