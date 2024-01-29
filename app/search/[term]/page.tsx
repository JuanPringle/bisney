import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react'
type Props={
  params:{
    term: string;
  }
}

 async function SearchPage({params:{term}}:Props) {
  if(!term) notFound();
  const termForUse=decodeURI(term);

  const searchedMovies = await getSearchedMovies(termForUse);
  const popularMovies = await getPopularMovies();
  return (
    <div className=' mt-'>

      <MoviesCarousel title="Here is your result" movies={searchedMovies} isVertical></MoviesCarousel>
      <MoviesCarousel title="Movies you may also like" movies={popularMovies} isVertical={false}></MoviesCarousel>
    </div>
  )
}

export default SearchPage
