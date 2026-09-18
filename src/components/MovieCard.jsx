const MovieCard = ({ movie, setSelectedMovie }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-amber-500/50 mb-5">

      {/* Poster */}
      <div className="aspect-[2/3] overflow-hidden bg-slate-800">
        <img
          src={
            movie.image?.medium ||
            "https://placehold.co/300x450?text=No+Image"
          }
          alt={movie.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="mb-3 truncate text-lg font-bold text-white">
          {movie.name}
        </h2>

        <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
          <span>
            ⭐ {movie.rating?.average || "N/A"}
          </span>

          <span>
            📅 {movie.premiered?.slice(0, 4) || "N/A"}
          </span>
        </div>

        <button
          onClick={() => setSelectedMovie(movie)}
          className="w-full rounded-lg bg-amber-500 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-400 active:scale-95"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;