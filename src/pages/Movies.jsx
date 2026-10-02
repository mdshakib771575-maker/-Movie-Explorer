
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [type, SetType] = useState("all")
  console.log(type);

  const filterMovies = movies.filter((movie) => {
    const matchName = movie.name.toLowerCase().includes(search.toLowerCase())
      const matchType = type==="all" || movie.genres.includes(type)
    return matchName && matchType
  })


  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);

      const data = await res.json();
      console.log(data);
      // setMovies(data);
    };
    fetchMovies();
  }, [search]);


  useEffect(() => {
    const mov = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows`);
      if (!res) {
        throw new Error("Could Not Movies Found")
      }

      const data = await res.json();
      setMovies(data.slice(0, 54));
    }
    mov()
  }, [])

  return (
    <div className="w-11/12 mx-auto">

      <div className=" mx-auto mt-8 mb-10 flex gap-10 ">
        <div className="relative flex w-full   ">
          <Search
            size={20}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3.5 pl-12 pr-1 text-white outline-none placeholder:text-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>


        <div>
          <select
            onChange={(e) => SetType(e.target.value)}
            className="text-white w-50 rounded-xl border border-slate-700 bg-slate-900 py-3.5">
            <option value="all">All types</option>
            <option value="Drama">Drama</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Family">Family</option>
            <option value="Supernatural">Supernatural</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Anime">Anime</option>
            <option value="Comedy">Comedy</option>
            <option value="History">History</option>
            <option value="Music">Music</option>
            <option value="Medical">Medical</option>
            <option value="Legal">Legal</option>
            <option value="Espionage">Espionage</option>
          </select>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {
          filterMovies.length === 0 ? <div className="text-white text-2xl w-6xl text-center">No Movies Meatch Your Search</div>
            : filterMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                setSelectedMovie={setSelectedMovie}
              />
            ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;