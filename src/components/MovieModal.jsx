import { X } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-slate-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-amber-500 hover:text-slate-950"
        >
          <X size={22} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Poster */}
          <div className="bg-slate-800">
            <img
              src={
                movie.image?.original ||
                movie.image?.medium ||
                "https://placehold.co/600x900?text=No+Image"
              }
              alt={movie.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">
              {movie.name}
            </h2>

            <div className="mb-5 space-y-2 text-sm text-slate-300">
              <p>
                ⭐ Rating:{" "}
                <span className="text-amber-400">
                  {movie.rating?.average || "N/A"}
                </span>
              </p>

              <p>
                📅 Release Date: {movie.premiered || "N/A"}
              </p>

              <p>
                🎭 Genres:{" "}
                {movie.genres?.length
                  ? movie.genres.join(", ")
                  : "N/A"}
              </p>

              <p>
                ⏱️ Runtime: {movie.runtime || "N/A"} minutes
              </p>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-white">
              Summary
            </h3>

            <div
              className="leading-7 text-slate-400"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "<p>No summary available.</p>",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;