import React from 'react'
import Header from './Header'
import NowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  NowPlayingMovies();
  return (
    <div>
      <Header />   
    </div>
  )
}

export default Browse