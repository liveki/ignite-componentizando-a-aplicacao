import { MovieCard } from './MovieCard';
import { Header } from './Header';
import { GenreResponseProps, MovieProps } from '../App';

import '../styles/content.scss';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}