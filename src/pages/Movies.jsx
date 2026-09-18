
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
// import MovieModal from "../components/MovieModal";
// import { useLoaderData } from "react-router";

const Movies = () => {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  // const [selectedMovie, setSelectedMovie] = useState(null);


  // console.log(search);
  console.log(movies);

  const filterMovies = movies.filter((book)=>{
    const match = book.name.toLowerCase().includes(search.toLowerCase())
    return match
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

      <div className="w-full max-w-2xl mx-auto mt-8 mb-10">
        <div className="relative flex">
          <Search
            size={20}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3.5 pl-12 pr-1 text-white outline-none placeholder:text-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

           <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
   {
    filterMovies.length === 0 ? <div className="text-white text-2xl w-6xl text-center">No Movies Meatch Your Search</div>
    :  filterMovies.map((movie) => (
      <MovieCard
       key={movie.id}
       movie={movie}
      // onDetails={setSelectedMovie}
    />
  ))}
   
  
</div>



    </div>
  );
};

export default Movies;