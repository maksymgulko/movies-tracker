import { useEffect, useState } from "react";
import { searchTrendingMovies } from "../../tmdb.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await searchTrendingMovies();
        setTrendingMovies(data);
      } catch (e) {
        console.error(e);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending movies today:</h1>
      <MoviesList toShow={true} movies={trendingMovies} />
    </>
  );
};
export default Home;
