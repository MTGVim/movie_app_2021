import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

const Home = () => {
  const [{isLoading, movies}, setState] = 
    useState({movies: [], isLoading: true});

  const getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    setState({movies, isLoading: false});
  }
  // 영화 데이터 로딩!
  useEffect(() => {
    getMovies();
  },[]);

  return <section className="container">
    {isLoading ? (
      <div>Loading...</div>
    ):(
      <div className="movies">
        {movies.map(movie =>
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        )}
      </div>
    )}
  </section>;
}

export default Home;