import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './components/Not-Found';
import ErrorPage from './components/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
   
    children:[
    {
      index:true,
      element:<Home/>,
      
    },
    {
      path:"/movies",
      element:<Movies></Movies>,
       errorElement:<ErrorPage/>,
    },
  
    {
      path:"*",
      element:<NotFound></NotFound>,
      
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
