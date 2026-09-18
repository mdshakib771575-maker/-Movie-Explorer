import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
    {
      index:true,
      element:<Home/>,
      // loader:async()=>{
      //  const res = await fetch(`https://api.tvmaze.com/shows`);
      //  console.log(res);
      //  if(!res){
      //   throw new Error("Could Not Movies Found")
      //  }
      
      //  return  res.json();
      // }
    },
    {
      path:"/movies",
      element:<Movies></Movies>
    }
  
    ]
  }
  
]);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
