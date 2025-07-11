import  { useEffect } from 'react'
import toast from 'react-hot-toast';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useGetNowMovies from '../Hooks/useGetNowMovies.js';
import usePopularMovies from '../Hooks/usePopularMovies.js';
import useTopRatedMovies from '../Hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../Hooks/useUpcomingMovies.js';
import SearchMovie from './SearchMovie.jsx';


const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movies.toggle);

  useGetNowMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(()=>{
    if(!user){
      navigate("/");
      toast.error("Please login to access the browse page.");
    }
  },[])

  return (
    <>
    {
      toggle ? <SearchMovie /> : 
      <>
        <MainContainer></MainContainer>
        <MovieContainer></MovieContainer>
      </>
    }
    </>
  )
}

export default Browse