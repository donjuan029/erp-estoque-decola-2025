import { Star } from 'lucide-react';
import { Movie } from '../types/movie';
import { api } from '../services/api';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={api.getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-[400px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{movie.overview}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            {movie.vote_average.toFixed(1)}
          </span>
          <span className="text-gray-500 text-sm">
            {new Date(movie.release_date).getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}