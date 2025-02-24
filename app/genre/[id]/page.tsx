import AISuggestion from '@/components/AISuggestion';
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
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
      <AISuggestion term={genre}/>
      <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
    </div>
    </div>
  )
}

export default GenrePage
