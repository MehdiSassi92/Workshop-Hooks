import './App.css';
import { useState } from 'react'
import { MovieList } from './components/MovieList';
import { MovieData } from "./components/MovieData";
import { Header } from './components/Header';
import { Add } from './components/Add';




function App() {
  const [textSearch, setTextSearch] = useState("");
  const [rateSearching, setRateSearching] = useState(0);
  const [movies, setMovies] = useState(MovieData);

  console.log(movies.length)
  return (
    <div className="App">
      <Header setTextSearch={setTextSearch} setRateSearching={setRateSearching} rateSearching={rateSearching} />
      <br /><br />
      <MovieList moviesData={movies} textSearch={textSearch} rateSearching={rateSearching} />
      <Add setMovies={setMovies} movies={movies} />
    </div>
  );
}

export default App;
