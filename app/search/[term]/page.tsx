import AISuggestion from '@/components/AISuggestion';
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
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
      <AISuggestion term={termForUse}/>
      <MoviesCarousel title="Here is your result" movies={searchedMovies} isVertical></MoviesCarousel>
      <MoviesCarousel title="Movies you may also like" movies={popularMovies} isVertical={false}></MoviesCarousel>
      </div>
    </div>
  )
}

export default SearchPage
