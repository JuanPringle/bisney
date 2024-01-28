import { notFound } from 'next/navigation';
import React from 'react'
type Props={
  params:{
    term: String;
  }
}

function SearchPage({params:{term}}:Props) {
  if(!term) notFound();
  const termForUse=decodeURI(term);
  return (
    <div>
      Here are some movies that are similar to {termForUse}
    </div>
  )
}

export default SearchPage
