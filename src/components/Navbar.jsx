import { Link } from "react-router";


const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* লোগো এবং ব্রান্ড নেম */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-amber-500 hover:text-amber-400 transition">
          <span className="text-2xl">🎬</span>
          <span>MovieExplorer</span>
        </Link>

        {/* নেভিগেশন লিংকস */}
        <nav className="flex items-center gap-6">
          <Link 
            
          >
            Home
          </Link>

          {/* Movie Listing পেজে যাওয়ার মেইন CTA বাটন */}
          <Link 
            to="/movies" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-amber-500/20"
          >
            Movies
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;