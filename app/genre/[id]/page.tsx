import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies } from '@/lib/getMovies';
import React from 'react'
type Props={
  params:{
    id:string;
  },
  searchParams:{
    genre:string;
  }
}

async function GenrePage({ params: {id}, searchParams: { genre}}: Props) {
  const movies= await getDiscoverMovies(id);
  return (
    <div>
      <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
    </div>
  )
}

export default GenrePage
