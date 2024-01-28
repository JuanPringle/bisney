import React from 'react'
type Props={
  params:{
    id:String;
  },
  searchParams:{
    genre:String;
  }
}

function GenrePage({ params: {id}, searchParams: { genre}}: Props) {
  return (
    <div>
      The ID of {genre} is {id}
    </div>
  )
}

export default GenrePage
