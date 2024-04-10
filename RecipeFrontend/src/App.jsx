import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact/>
        </>
      ),
    },
    {
      path:'/register',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Signup/> */}
    </>
  );
}

export default App;
