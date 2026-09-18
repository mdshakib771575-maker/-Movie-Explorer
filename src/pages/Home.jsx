import { Link } from "react-router";

const Home = () => {

  return (

    
    <div className="relative flex-1 lg:min-h-[calc(100vh-4rem)] bg-slate-900 text-white flex items-center justify-center overflow-hidden">

         {/* <div className="relative bg-slate-900 text-white lg:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"></div> */}

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">
          DISCOVER MOVIES
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore and discover your favorite movies and TV shows from around the world.
        </p>

        {/* CTA Button */}
        <Link
          to="/movies"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg px-8 py-3.5 rounded-xl transition duration-300 shadow-lg hover:shadow-amber-500/25 active:scale-95"
        >
          Explore Now
        </Link>

      </div>
    </div>
  );
};

export default Home;