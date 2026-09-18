

import { SearchX } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen w-11/12 mx-auto  text-center">
      <div className="text-center ">

        <div className="flex justify-center mb-2 text-white">
          <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center">
            <SearchX size={50} className="text-secondary" />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-secondary text-white">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4 text-white">
          Page Not Found
        </h2>

        <p className="text-default-500 mt-3 text-white">
          Sorry! The page you are looking for doesnot exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8 ">
            <Link to={"/"}>
          <button
            c className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-amber-500/20"
          >
            Go Home
          </button>
          </Link>

        
        </div>

      </div>
    </div>
  );
}