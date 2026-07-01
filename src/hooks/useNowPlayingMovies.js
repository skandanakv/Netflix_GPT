import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const NowPlayingMovies = () => {
      const dispatch = useDispatch();
      
    //fetch data from tmdb api and save all the movie in store
  const NowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    NowPlayingMovies();
  },[])
}

export default NowPlayingMovies;