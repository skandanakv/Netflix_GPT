import React from 'react'
import Header from './Header'
import NowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  NowPlayingMovies(); //call the hook
  return (
    <div>
      <Header />   
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse