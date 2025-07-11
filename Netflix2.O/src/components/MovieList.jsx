import React from 'react'
import MovieCard from './MovieCard.jsx'


const MovieList = ({title , movies , searchOrnot}) => {
  return (
    <div className='px-8 mb-4'>
        {title && <h1 className={`${searchOrnot ? "text-lg":"text-3xl"} ${searchOrnot ? "text-black" : "text-white"} mb-2`}>{searchOrnot ? `Showing results for ${title}` : title}</h1>}
        <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
            <div className='flex gap-3 items-center'>
                {
                    movies && movies.map((movie) => (
                        <MovieCard key={movie.id} movieId={movie.id} pic={movie.poster_path} title={movie?.title} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList